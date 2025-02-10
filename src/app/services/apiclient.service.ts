import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ApiclientService  {

  private static instance: ApiclientService;

  private constructor(private httpClient: HttpClient) {}

  public static getInstance(httpClient: HttpClient): ApiclientService {
    if (!ApiclientService.instance) {
      ApiclientService.instance = new ApiclientService(httpClient);
    }
    return ApiclientService.instance;
  }

  public async get<T>(path: string, options?: { headers?: HttpHeaders | { [key: string]: string } }): Promise<T> {
    const url = `${environment.apiUrl}${path}`;
    const response = await this.httpClient.get<T>(url, options).toPromise();
    if (response === undefined) {
      throw new Error('Response is undefined');
    }
    return response;
  }
  

  public async post<T>(path: string, body: any, headers?: { [key: string]: string }): Promise<T> {
    const url = `${environment.apiUrl}${path}`;
    const options = headers ? { headers: new HttpHeaders(headers) } : {};
    const response = await this.httpClient.post<T>(url, body, options).toPromise();
    if (response === undefined) {
      throw new Error('Response is undefined');
    }
    return response;
  }

  public async put<T>(path: string, body: any, headers?: { [key: string]: string }): Promise<T> {
    const url = `${environment.apiUrl}${path}`;
    const options = headers ? { headers: new HttpHeaders(headers) } : {};
    const response = await this.httpClient.put<T>(url, body, options).toPromise();
    if (response === undefined) {
      throw new Error('Response is undefined');
    }
    return response;
  }
}