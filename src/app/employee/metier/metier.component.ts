import { Component, OnInit } from '@angular/core';
import { Metier } from '../models/metier.model';
import { ActivatedRoute } from '@angular/router';
import { MetierService } from '../service/metier/metier.service';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrl: './metier.component.css'
})
export class MetierComponent implements OnInit {
  employeeId: number;
  employee: Employee;
  metiers: Metier[];
  showAddMetier: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private metierService: MetierService,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeId = employeeId;
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
    });
    this.metierService.getMetiersByEmployee(employeeId).subscribe((metiers) => {
      this.metiers = metiers;
      console.log(this.metiers);
    });
  }

  showAddMetierForm(): void {
    this.showAddMetier = !this.showAddMetier;
  }
}