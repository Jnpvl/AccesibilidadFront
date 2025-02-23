import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { LocalStorageService } from '../services/local-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  usuario: string = "";
  password: string = "";
  error: string = "";

  constructor(
    private usersService: UsersService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

 
  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.error = "";
    try {
      const credentials = { username: this.usuario, password: this.password };
      const response = await this.usersService.loginUser(credentials);   
      
      console.log("resp",response)
      if (response && response.token) {
        if (!response.status) {
          this.error = "Usuario inactivo. Contacta al administrador.";
          return;
        }
        if(!response.permissions.ADBSystem == true){
          this.error = "No tiene acceso al sistema";
          return;
        }
        this.localStorageService.setToken(response.token);
        this.localStorageService.setUser(response.permissions);
  
        this.router.navigate(['/dashboard/home'],{replaceUrl: true});
      } else {
        this.error = "Inicio de sesión fallido. Verifica tus credenciales.";
      }
    } catch (err) {
      console.error("Error en login", err);
      const errorResponse = err as any;
      this.error = errorResponse.error?.message || errorResponse.statusText || "Credenciales inválidas";
    }
  }
}
