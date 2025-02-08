import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConcesionarioService } from '../../../services/concesionario.service';

@Component({
  selector: 'app-concesionario',
  imports: [TitleComponent,CommonModule,FormsModule],
  templateUrl: './concesionario.component.html',
  styleUrl: './concesionario.component.css'
})
export class ConcesionarioComponent {

  data: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 0;
  searchText: string = '';
  isLoading: boolean = false;
  excelOptions: boolean = false;
  private searchTimeout: any;

  exportAll: boolean = false;
  exportColumns: { [key: string]: boolean } = {
    TipoDePermiso: false,
    NoExpediente: false,
    Modalidad: false,
    Sistema: false,
    Permisionario: false,
    Municipio: false,
    Terminos: false,
    Marca: false,
    Modelo: false,
    TipoDeUnidad: false
  };
  
  columnFilters: { [key: string]: string } = {
    TipoDePermiso: '',
    NoExpediente: '',
    Modalidad: '',
    Sistema: '',
    Permisionario: '',
    Municipio: '',
    Terminos: '',
    Marca: '',
    Modelo: '',
    TipoDeUnidad: ''
  };
soloVigentes: boolean = false;

  globalSearch: string = '';

  filterOptions = [
    { id: 'tipoPermiso', key: 'TipoDePermiso', label: 'Tipo de Permiso' },
    { id: 'noExpediente', key: 'NoExpediente', label: 'No. Expediente' },
    { id: 'modalidad', key: 'Modalidad', label: 'Modalidad' },
    { id: 'sistema', key: 'Sistema', label: 'Sistema' },
    { id: 'permisionario', key: 'Permisionario', label: 'Permisionario' },
    { id: 'municipio', key: 'Municipio', label: 'Municipio' },
    { id: 'terminos', key: 'Terminos', label: 'Términos' },
    { id: 'marca', key: 'Marca', label: 'Marca' },
    { id: 'modelo', key: 'Modelo', label: 'Modelo' },
    { id: 'tipoUnidad', key: 'TipoDeUnidad', label: 'Tipo de Unidad' },
  ];

  constructor(
    private concesionarioService: ConcesionarioService
  ) {
    this.initializeData();
  }

  private async initializeData() {
    const response = await this.concesionarioService.getConcesionario(
      this.currentPage, this.pageSize, this.searchText
    );
    this.currentPage = response.pagination.page;
    this.pageSize = response.pagination.pageSize;
    this.data = response.data;
    console.log("data",this.data)
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
      await this.concesionarioService.downloadReport();
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
      alert("Error al descargar el reporte. Por favor, inténtalo de nuevo.");
    } finally {
      this.isLoading = false;
    }
  }
  onExportAllChange(): void {
    if (this.exportAll) {

      for (const key in this.exportColumns) {
        this.exportColumns[key] = false;
      }

      this.columnFilters = {};
    }
  }

  hasColumnFilters(): boolean {
    return Object.values(this.exportColumns).some(val => val === true);
  }

  async downloadExcel() {
    this.isLoading = true;
  
    let filtersObj: { [key: string]: string } = {};
  
    if (this.hasColumnFilters()) {
      for (const option of this.filterOptions) {
        if (this.exportColumns[option.key] && this.columnFilters[option.key] && this.columnFilters[option.key].trim() !== '') {
          filtersObj[option.key] = this.columnFilters[option.key].trim();
        }
      }
    } else if (this.globalSearch && this.globalSearch.trim() !== '') {
      filtersObj['global'] = this.globalSearch.trim();
    }
      if (this.soloVigentes) {
        filtersObj['soloVigentes'] = 'true';
      } 
    try {
      await this.concesionarioService.downloadExcel({
        filters: JSON.stringify(filtersObj)
      });
      this.excelOptions = false;
      this.isLoading = false;
      this.globalSearch = '';
      for (const key in this.columnFilters) {
        this.columnFilters[key] = '';
      }
      for (const key in this.exportColumns) {
        this.exportColumns[key] = false;
      }
      this.soloVigentes = false;
    } catch (error) {
      console.error('Error al descargar el Excel', error);
      this.isLoading = false;
    }
  }
  
}
