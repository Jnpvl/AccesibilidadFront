import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';

@Injectable({
  providedIn: 'root'
})
export class AsegudarorasService {

  constructor(
    private apiclientService: ApiclientService
  ) { }

  public async getAseguradoras(page: number, pageSize: number, search?: string): Promise<any> {
    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });

    if (search) {
      params.append("search", search);
    }

    const response = this.apiclientService.get<any>(`aseguradoras?${params.toString()}`);
    return response;
  }

  public async downloadReport(): Promise<void> {
    try {
      const blob: Blob = await this.apiclientService.get<Blob>('aseguradoras/report', {
        responseType: 'blob', 
        
      } as any);

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte_Aseguradoras.pdf';
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
     
      const params = new URLSearchParams();
      if (options.columns) {
        params.append('columns', options.columns);
      }
      if (options.filters) {
        params.append('filters', options.filters);
      }
      
      const url = `aseguradoras/excel?${params.toString()}`;

      console.log("url",url)
      
      const blob: Blob = await this.apiclientService.get<Blob>(url, {
        responseType: 'blob'
      } as any);
  
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'reporte_Aseguradoras.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch(error) {
      console.error("Error al descargar el excel", error);
    }
  }

  

}
