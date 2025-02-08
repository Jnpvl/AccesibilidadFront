import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { PermisosService } from '../../../services/permisos.service';
import { Permisos } from '../../../interfaces/Permisos.interface';

@Component({
  selector: 'app-permisos-detail',
  imports: [TitleComponent, CommonModule],
  templateUrl: './permisos-detail.component.html',
  styleUrls: ['./permisos-detail.component.css']
})
export class PermisosDetailComponent implements OnInit {
  permisionarioId!: number;
  permisionario: string = '';

  curp: string = '' ;
  colonia: string = '';
  Cp: string = '';
  direccion: string = '';
  rfc : string ='';
  telefono: string = '';
  tipoPermisionario : string = ''

  datos: (Permisos & { expanded: boolean })[] = [];

  isLoading: boolean = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private permisosService: PermisosService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('PermisionarioId');
    if (idParam) {
      this.permisionarioId = +idParam;
    }
    this.initializeData();
  }

  async initializeData() {
    try {
      const response = await this.permisosService.getPermisionario(this.permisionarioId);
      if (response && response.permisos) {
        this.datos = response.permisos.map((permiso: Permisos) => ({
          ...permiso,
          expanded: false,

        }));
        this.permisionario = response.permisos[0].Permisionario;

        console.log(response.permisos)
      }

      if(response && response.permisionario){
        this.curp = response.permisionario.CURP || "No definida"
        this.colonia = response.permisionario.Colonia || "No definida"
        this.Cp = response.permisionario.CodigoPostal || "No definida"
        this.direccion =  response.permisionario.Direccion || "No definida"
        this.rfc = response.permisionario.RFC || "No definida"
        this.telefono = response.permisionario.Telefono1 || "No definida"
        this.tipoPermisionario = response.permisionario.TipoPermisionario || "No definida"

      }
    } catch (error) {
      console.error("Error al obtener el permisionario:", error);
    }
  }

  isVigente(fechaTermino: string): boolean {
    const fechaTerminoDate = new Date(fechaTermino);
    const today = new Date();
    return fechaTerminoDate >= today;
  }

  async pdfGlobal() {
    this.isLoading = true; 
    try {
      await this.permisosService.downloadReports(this.permisionarioId);
      this.isLoading = false;
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
    } finally {
      this.isLoading = false; 
    }
  }

  async excelGlobal(){
    this.isLoading = true;

    try {
      await this.permisosService.downloadPermisionarioExcel(this.permisionarioId);
      this.isLoading = false;
    } catch (error) {
      console.error('Error al descargar el Excel', error);
      this.isLoading = false;
    }
  }

  async pdfIndividual(permiso: number) {
    this.isLoading = true; 
    try {
      await this.permisosService.downloadIndividualReport(permiso);
      this.isLoading = false;
    } catch (error) {
      console.error("Error al descargar el reporte:", error);
    } finally {
      this.isLoading = false; 
    }
  }

  goBack() {
    this.router.navigate(['/dashboard/permisos']);
  }
}