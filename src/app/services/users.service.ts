import { Injectable } from '@angular/core';
import { ApiclientService } from './apiclient.service';
import { UsuariosData } from '../interfaces/Usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiClient: ApiclientService) { }

  public async loginUser(credentials: { username: string, password: string }): Promise<any> {
    return await this.apiClient.post<any>('users/login', credentials);
  }


  public async createUser(userData: UsuariosData, token: string): Promise<UsuariosData> {
    const headers = { 'Authorization': `Bearer ${token}` };
    return await this.apiClient.post<UsuariosData>('users/create', userData, headers);
  }

  public async updateUser(userId: number, updateData: any, ): Promise<any> {

    const token = localStorage.getItem('token');

    console.log("data",updateData)
    const headers = { 'Authorization': `Bearer ${token}` };
    return await this.apiClient.put<any>(`users/update/${userId}`, updateData, headers);
  }

  public async getUsers(
    page: number,
    pageSize: number,
    search?: string,): Promise<UsuariosData> {

    const params = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });

    if (search) {
      params.append("search", search);
    }
    return await this.apiClient.get<UsuariosData>(`users/obtener?${params.toString()}`);
  }

}
