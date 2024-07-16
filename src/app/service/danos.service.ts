import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DanosService {
  private apiUrl = 'http://localhost:8080/danos';

  constructor(private http: HttpClient) { }

  getAllDanos(filtros: any): Observable<any[]> {
    let params = new HttpParams();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin123')
    })

    if (filtros.agricultorId) {
      params = params.set('agricultorId', filtros.agricultorId);
    }
    if (filtros.isSolved != undefined) {
      params = params.set('isSolved', filtros.isSolved);
    }
    if (filtros.cultura != undefined) {
      params = params.set('cultura', filtros.cultura);
    }

    return this.http.get<any[]>(this.apiUrl, { headers, params });
  }
}
