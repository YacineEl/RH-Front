import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Metier } from '../../models/metier.model';

@Injectable({
  providedIn: 'root'
})
export class MetierService {

  private baseUrl = "http://localhost:8080/api/metiers";

  constructor(private httpClient: HttpClient) {}

  getMetiers(): Observable<Metier[]> {
    return this.httpClient.get<Metier[]>(`${this.baseUrl}`);
  }

  addMetier(id:number, metier: Metier) {
    return this.httpClient.post<Metier>(`${this.baseUrl}/emp/${id}`, metier);
  }

  updateMetier(id: number, metier: Metier): Observable<Metier> {
    return this.httpClient.put<Metier>(`${this.baseUrl}/${id}`, metier);
  }

  deleteMetier(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }

  getMetiersByEmployee(empId: number){
    return this.httpClient.get<Metier[]>(`${this.baseUrl}/emp/${empId}`);
  }
}
