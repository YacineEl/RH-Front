import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/employes"

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number,employee:Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee);
  }

  getEmployeesWithFilters(salary: number, metierLabel: string): Observable<Employee[]> {
    let params = new HttpParams();
    if (salary) {
      params = params.set('salary', salary.toString());
    }
    if (metierLabel) {
      params = params.set('metierLabel', metierLabel);
    }
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`, { params });
  }

}
