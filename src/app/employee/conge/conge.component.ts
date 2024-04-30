import { Component } from '@angular/core';
import { Conge } from '../models/conge.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { CongeService } from '../service/conge/conge.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrl: './conge.component.css'
})
export class CongeComponent {
  employeeId: number;
  employee: Employee;
  conges: Conge[];
  showAddConge: boolean = false;


  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private congeService: CongeService){
  }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(employeeId);
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
    });
    this.congeService.getCongesByEmploye(employeeId).subscribe((employee) => {
      this.conges = employee;
      console.log(this.conges);
    }
    );
  }
  showAddCongeForm(): void {
    this.showAddConge = !this.showAddConge; 
  }
  
}
