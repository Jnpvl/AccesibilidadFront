import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../../services/permisos.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { Permisos } from '../../../interfaces/Permisos.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permisos',
  imports: [TitleComponent, CommonModule, FormsModule],
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.css']
})
export class PermisosComponent implements OnInit {

  data: Permisos[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 10;
  searchText: string = '';
  isLoading: boolean = false;
  excelOptions: boolean = false;
  private searchTimeout!: ReturnType<typeof setTimeout>;

  fechaInicio: string = '';
  fechaTermino: string = '';

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

  // Propiedad para almacenar si el usuario tiene permiso para exportar Excel
  canExportExcel: boolean = false;

  constructor(
    private permisosService: PermisosService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.initializeData();
  }

  ngOnInit(): void {
    // Al iniciar, obtenemos el usuario y verificamos el permiso de exportación
    const user = this.localStorageService.getUser();
    if (user && user.canExportExcel) {
      this.canExportExcel = true;
    }
  }

  private async initializeData() {
    const fechaInicioFormatted = this.fechaInicio ? `${this.fechaInicio} 00:00:00` : '';
    const fechaTerminoFormatted = this.fechaTermino ? `${this.fechaTermino} 23:59:59` : '';

    const response = await this.permisosService.getPermisos(
      this.currentPage, this.pageSize, this.searchText, fechaInicioFormatted, fechaTerminoFormatted
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
    if (
      !this.exportAll &&
      !this.soloVigentes &&
      !this.hasColumnFilters() &&
      (!this.globalSearch || this.globalSearch.trim() === '')
    ) {
      alert("Por favor, seleccione al menos una opción antes de exportar.");
      return;
    }
  
    this.isLoading = true;
  
    let filtersObj: { [key: string]: string } = {};
  
    if (this.hasColumnFilters()) {
      for (const option of this.filterOptions) {
        if (
          this.exportColumns[option.key] &&
          this.columnFilters[option.key] &&
          this.columnFilters[option.key].trim() !== ''
        ) {
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
      await this.permisosService.downloadExcel({
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

  detalles(PermisionarioId: number) {
    this.router.navigate(['/dashboard/permisos-detail', PermisionarioId]);
  }

  onDateChange(): void {
    this.initializeData();
  }

  resetDateFilter(): void {
    this.fechaInicio = '';
    this.fechaTermino = '';
    this.initializeData();
  }
}
