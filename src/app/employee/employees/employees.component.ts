import { Component } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {

  emp : Employee;

  employeeReceived(event: Employee){
    this.emp = event;
  }
}
