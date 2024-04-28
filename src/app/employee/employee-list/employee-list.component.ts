import { Component, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees : Employee[] = [];
  @Output() employeeSelected = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {  }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  onEmployeeSelected(event: Employee){
    this.employeeSelected.emit(event);
  }
}
