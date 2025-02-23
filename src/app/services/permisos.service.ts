import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';
import { PermisionarioData } from '../interfaces/Permisos.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(
    private apiclientService: ApiclientService
  ) { }

  public async getPermisos(
    page: number, 
    pageSize: number, 
    search?: string, 
    fechaInicio?: string, 
    fechaTermino?: string
  ): Promise<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
  
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
  
    if (search) {
      params.append("search", search);
    }
    if (fechaInicio) {
      params.append("fechaInicio", fechaInicio);
    }
    if (fechaTermino) {
      params.append("fechaTermino", fechaTermino);
    }
  
    const headers = { 'Authorization': `Bearer ${token}` };
  
    return this.apiclientService.get<any>(
      `permisos?${params.toString()}`, 
      environment.apiUrl, 
      { headers }
    );
  }
  
  public async getPermisionario(permisionarioId: number): Promise<PermisionarioData> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
  
    const headers = { 'Authorization': `Bearer ${token}` };
  
    return this.apiclientService.get<PermisionarioData>(
      `permisos/permisionario?permisionarioId=${permisionarioId}`,
      environment.apiUrl, 
      { headers }
    );
  }
  
  public async downloadReports(permisionarioId: number): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const blob: Blob = await this.apiclientService.get<Blob>(
        `permisos/reports`, 
        environment.apiUrl,
        {
          params: { permisionarioId: permisionarioId },
          responseType: 'blob',
          headers
        } as any
      );
  
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte_permisos.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
    }
  }
  
  public async downloadExcel(options: {
    columns?: string;
    filters?: string;
  }): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const params = new URLSearchParams();
      if (options.columns) {
        params.append('columns', options.columns);
      }
      if (options.filters) {
        params.append('filters', options.filters);
      }
  
      const url = `permisos/excel?${params.toString()}`;
  
      const blob: Blob = await this.apiclientService.get<Blob>(
        url,
        environment.apiUrl, 
        {
          responseType: 'blob',
          headers
        } as any
      );
  
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'reporte_permisos.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error al descargar el excel", error);
    }
  }
  
  public async downloadPermisionarioExcel(permisionarioId: number): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const filtersObj = {
        PermisionarioId: permisionarioId.toString()
      };
      const filtersString = JSON.stringify(filtersObj);
  
      const blob: Blob = await this.apiclientService.get<Blob>(
        `permisos/permisionarioExcel`,
        environment.apiUrl,
        {
          params: { filters: filtersString },
          responseType: 'blob',
          headers
        } as any
      );
  
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'reporte_permisosionario.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error al descargar el excel", error);
    }
  }
  
  public async downloadIndividualReport(permisoId: number): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const headers = { 'Authorization': `Bearer ${token}` };
  
      const blob: Blob = await this.apiclientService.get<Blob>(
        `permisos/report`,
        environment.apiUrl,
        {
          params: { permisoId: permisoId },
          responseType: 'blob',
          headers
        } as any
      );
  
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte_permisos.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
    }
  }
    
}
