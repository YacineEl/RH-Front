import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrat } from '../../models/contrat.model';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  private baseUrl = "http://localhost:8080/api/contrats";
  constructor(private httpClient: HttpClient) { }

  getContrats() {
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}`);
  }

  getContrat(id: number) {
    return this.httpClient.get<Contrat>(this.baseUrl + '/contrats/' + id);
  }
  addContrat(id: number,contrat: Contrat) {
    return this.httpClient.post<Contrat>(`${this.baseUrl}/${id}`, contrat);
  }
  updateContrat(id: number, contrat: Object) {
    return this.httpClient.put<Contrat>(`${this.baseUrl}/${id}`, contrat);
  }
  deleteContrat(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getContratsByEmploye(empId: number) {
    return this.httpClient.get<Contrat[]>(`${this.baseUrl}/emp/${empId}`);
  }


}
