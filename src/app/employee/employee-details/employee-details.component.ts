import { Component, Input } from '@angular/core';
import { Employee } from '../employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  @Input() employeeToDisplay: Employee;
  
  constructor(private router: Router) { }

  updateEmployee(id:number): void {
    this.router.navigate(['update-employee', id]);
  }
  congeEmployee(id:number):void{
    this.router.navigate(['conge-employee', id]);
  }
  contratEmployee(id:number):void{
    this.router.navigate(['contrat-employee', id]);
  }
  metierEmployee(id:number):void{
    this.router.navigate(['metier-employee', id]);
  }
}
