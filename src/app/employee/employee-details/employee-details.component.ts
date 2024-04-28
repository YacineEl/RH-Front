import { Component, Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  @Input() employeeToDisplay: Employee;
  
  ngAfterViewChecked(): void {
    console.log(this.employeeToDisplay);
  }
}
