import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrl: './employee-item.component.css'
})
export class EmployeeItemComponent {
  
  @Input() employee: Employee;
  @Output() employeeSelected = new EventEmitter<Employee>();

  selectEmployee(){
    this.employeeSelected.emit(this.employee);
    // console.log(this.employeeSelected);
    // console.log(this.employee);
  }
}
