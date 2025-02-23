import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';
import { UsuariosData } from '../interfaces/Usuarios.interface';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiClient: ApiclientService) { }

  public async loginUser(credentials: { username: string, password: string }): Promise<any> {
    return await this.apiClient.post<any>('users/login', credentials, environment.apiAuth);
  }

}
