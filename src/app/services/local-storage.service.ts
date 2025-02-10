import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'user';

  constructor() { }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  public setUser(user: any): void {
    const {
      ApellidoM,
      ApellidoP,
      Name,
      canCreateUser,
      canExportExcel,
      canExportPdf,
      id,
      role,
      status,
      username
    } = user;
  
    const filteredUser = {
      ApellidoM,
      ApellidoP,
      Name,
      canCreateUser,
      canExportExcel,
      canExportPdf,
      id,
      role,
      status,
      username
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(filteredUser));
  }

  public getUser(): any {
    const userData = localStorage.getItem(this.USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  public removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }
}
