import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CrudOpService {
  private baseUrl = 'https://localhost:7066/api';

  constructor(private http: HttpClient) { }

  getapi(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`);
  }

  postapi(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }
  putapi(url: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${url}`, data);
  }

  deleteapi(url: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${url}`);
  }
}

