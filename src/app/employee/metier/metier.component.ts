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
    this.getData();
  }

  getData(){
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

  deleteMetier(id: number){
    this.metierService.deleteMetier(id).subscribe(()=>
    this.getData()
    );
  }

  showAddMetierForm(): void {
    this.showAddMetier = !this.showAddMetier;
  }

  OnNewMetier(metierData: Metier) {
    this.employeeId = metierData.empId;
    this.metierService.addMetier(this.employeeId, metierData).subscribe(()=>
    this.getData()
    );
  }

  protected readonly Metier = Metier;
}
