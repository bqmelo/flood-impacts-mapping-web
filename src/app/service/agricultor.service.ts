import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgricultorService {
  private apiUrl = 'http://localhost:8080/agricultores';

  constructor(private http: HttpClient) { }

  getAllAgricultores(filtros: any): Observable<any[]> {
    let params = new HttpParams();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin123')
    })

    if (filtros.razaoSocial) {
      params = params.set('razaoSocial', filtros.razaoSocial);
    }

    return this.http.get<any[]>(this.apiUrl, { headers, params });
  }
}
