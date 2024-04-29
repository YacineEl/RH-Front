import { Component } from '@angular/core';
import { Conge } from '../models/conge.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrl: './conge.component.css'
})
export class CongeComponent {
  employeeId: number;
  employee: Employee;
  conges: Conge[];


  constructor(private employeeService: EmployeeService,private route: ActivatedRoute){
  }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
      console.log(this.employee);
      this.conges = employee.conges;
      console.log(this.conges);
    });
  }
  
}
