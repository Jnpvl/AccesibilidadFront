import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { AsegudarorasService } from '../../../services/aseguradoras.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-example',
  imports: [TitleComponent, CommonModule, FormsModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {

  data: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 0;
  searchText: string = '';
  isLoading: boolean = false;
  excelOptions: boolean = false
  private searchTimeout: any;

  exportAll: boolean = false;
  exportColumns = {
    nombre: false,
    direccion: false,
    telefono: false,
    localidad: false
  };
  searchEspecificData: string = '';
  


  constructor(
    private aseguradorasService: AsegudarorasService
  ) {
    this.initializeData();
  }

  private async initializeData() {
    const response = await this.aseguradorasService.getAseguradoras(
      this.currentPage, this.pageSize, this.searchText
    );
    this.currentPage = response.pagination.page;
    this.pageSize = response.pagination.pageSize;
    this.data = response.data;
    this.totalItems = response.pagination.totalRecords;
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  }

  onSearchInputChange(): void {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentPage = 1;
      this.initializeData();
    }, 500); 
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPage();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPage();
    }
  }

  private async loadPage(): Promise<void> {
    await this.initializeData();
  }

  async downloadPdf() {
    this.isLoading = true; 
    try {
      await this.aseguradorasService.downloadReport();
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
    } finally {
      this.isLoading = false; 
    }
  }


  onExportAllChange(): void {
    if (this.exportAll) {
      this.exportColumns = {
        nombre: false,
        direccion: false,
        telefono: false,
        localidad: false
      };
    }
  }
  

  async downloadExcel() {
    this.isLoading = true; 
    let selectedColumns: string[] = [];
    if (!this.exportAll) {
      if (this.exportColumns.nombre) {
        selectedColumns.push('seg_nombre');
      }
      if (this.exportColumns.direccion) {
        selectedColumns.push('seg_direccion');
      }
      if (this.exportColumns.telefono) {
        selectedColumns.push('seg_tel');
      }
      if (this.exportColumns.localidad) {
        selectedColumns.push('seg_loc');
      }
    }
    let columns: string | undefined = selectedColumns.length > 0 ? selectedColumns.join(',') : undefined;
  
    let filters: string | undefined = undefined;
    if (this.searchEspecificData && this.searchEspecificData.trim() !== '') {
      if (columns) {
        filters = this.searchEspecificData.trim();
      } else {
        const term = this.searchEspecificData.trim();
        filters = `seg_nombre LIKE '%${term}%' OR seg_direccion LIKE '%${term}%' OR seg_tel LIKE '%${term}%' OR seg_loc LIKE '%${term}%'`;
      }
    }
  
    try {
      await this.aseguradorasService.downloadExcel({
        columns: columns, 
        filters: filters, 
      });
      this.excelOptions = false;
      this.isLoading = false;
      this.searchEspecificData = ''; 

    } catch (error) {
      console.error('Error al descargar el Excel', error);
    }
  }
  
  

}