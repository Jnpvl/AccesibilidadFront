import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TitleComponent } from '../../../shared/title/title.component';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-usuarios',
  imports: [TitleComponent, CommonModule, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  data: any[] = [];
  currentPage: number = 1;
  totalPages: number = 0;
  totalItems: number = 0;
  pageSize: number = 10;
  searchText: string = '';
  isLoading: boolean = false;
  excelOptions: boolean = false;
  private searchTimeout!: ReturnType<typeof setTimeout>;

  statusOptions: string[] = ['Activo', 'Inactivo'];
  toastMessage: string = "";
  toastType: 'success' | 'error' = 'success';

  showCreateModal: boolean = false;
  newUser: any = {
    role: '',
    Name: '',
    ApellidoP: '',
    ApellidoM: '',
    password: '',
    canExportExcel: false,
    canExportPdf: false,
    canCreateUser: false,
  };

  constructor(private usuariosService: UsersService) {
    this.initializeData();
  }

  private async initializeData() {
    try {
      const response = await this.usuariosService.getUsers(this.currentPage, this.pageSize, this.searchText);
      this.currentPage = response.pagination.page;
      this.pageSize = response.pagination.pageSize;
      this.data = response.data;
  
      this.data.forEach(user => {
        user.newStatus = user.status ? user.status : 'Activo';
      });      
  
      this.totalItems = response.pagination.totalRecords;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    } catch (error) {
      console.error('Error al inicializar los datos:', error);
    }
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

  onPermissionChange(user: any, field: string, value: boolean): void {
    const updateData = { [field]: value };
  
    user[field] = value;
  
    this.usuariosService.updateUser(user.id, updateData)
      .then(response => {
        this.showToast(`Permiso actualizado correctamente.`, 'success');
      })
      .catch(error => {
        console.error(`Error actualizando ${field} del usuario ${user.id}:`, error);
        user[field] = !value;
        const errorMessage = error?.error?.message || error?.message || 'Error al actualizar el permiso.';
        this.showToast(`Error: ${errorMessage}`, 'error');
      });
  }
  
  updateStatus(user: any): void {
    const updateData = { status: user.newStatus };
    console.log("update", updateData);
  
    this.usuariosService.updateUser(user.id, updateData)
      .then(response => {
        user.status = user.newStatus;
        this.showToast('Estatus actualizado correctamente.', 'success');
      })
      .catch(error => {
        console.error(`Error actualizando el estatus del usuario ${user.id}:`, error);
        user.newStatus = user.status;
        this.showToast('Error al actualizar el estatus.', 'error');
      });
  }
  
  showToast(message: string, type: 'success' | 'error' = 'success'): void {
    this.toastMessage = message;
    this.toastType = type;
    setTimeout(() => {
      this.toastMessage = "";
    }, 3000);
  }

  openCreateModal(): void {
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
    this.newUser = {
      role: '',
      Name: '',
      ApellidoP: '',
      ApellidoM: '',
      password: '',
      canExportExcel: false,
      canExportPdf: false,
      canCreateUser: true,
    };
  }

  async createNewUser(): Promise<void> {
    try {
      const token = localStorage.getItem('token') || '';
      const response = await this.usuariosService.createUser(this.newUser, token);
      this.showToast(response.message || 'Usuario creado exitosamente.', 'success');
      this.closeCreateModal();
      this.initializeData(); 
    } catch (error) {
      
      const errorMessage = 'Error al crear el usuario.';
      this.showToast(`Error: ${errorMessage}`, 'error');
    }
  }
}
