import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conge } from '../../models/conge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  private baseUrl = "http://localhost:8080/api/conges";


  constructor(private httpClient: HttpClient) {}

  getConges() {
    return this.httpClient.get<Conge[]>(`${this.baseUrl}`);
  }

  addConge(id,conge) {
    return this.httpClient.post<Conge>(`${this.baseUrl}/emp/${id}`, conge);
  }

  updateConge(id, conge) {
    return this.httpClient.put<Conge>(`${this.baseUrl}/${id}`, conge);
  }

  deleteConge(id) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getCongesByEmploye(empId: number) {
    return this.httpClient.get<Conge[]>(`${this.baseUrl}/emp/${empId}`);
  }
}
