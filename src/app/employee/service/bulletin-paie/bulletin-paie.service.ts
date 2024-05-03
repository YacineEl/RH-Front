import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BulletinPaie} from "../../models/bulletinPaie.model";
import {Observable} from "rxjs";
import {Employee} from "../../employee.model";

@Injectable({
  providedIn: 'root'
})
export class BulletinPaieService {

  private baseUrl = 'http://localhost:8080/api/bulletinpaies'
  constructor(private httpClient: HttpClient) { }

  createBulletinPaie(bulletinPaie: BulletinPaie,
                     id: number,
                     year: number,
                     month: number): Observable<BulletinPaie> {
    return this.httpClient.post<BulletinPaie>(`${this.baseUrl}/${id}/${year}/${month}`, bulletinPaie);
  }

  getBulletinPaieEmployeeId(id: number): Observable<BulletinPaie[]> {
    return this.httpClient.get<BulletinPaie[]>(`${this.baseUrl}/emp/${id}`);
  }
}
