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
        // Hacer la petición manualmente con fetch
        const response = await fetch('http://localhost:8080/api/v1/aseguradoras/report', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer TU_TOKEN_SI_ES_NECESARIO'
            }
        });

        if (!response.ok) {
            throw new Error(`Error en la descarga: ${response.statusText}`);
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte_Aseguradoras.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        console.log("Descarga completada.");
    } catch (error) {
        console.error("Error al descargar el reporte:", error);
    }
}




}
