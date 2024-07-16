import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private apiUrl = 'http://localhost:8080/userTypes';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:admin123')
    })
  };

  constructor(private http: HttpClient) { }

  getUserTypes(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions);
  }
}
