import { Component } from '@angular/core';
import { Contrat } from '../models/contrat.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';
import { ContratService } from '../service/contrat/contrat.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrl: './contrat.component.css'
})
export class ContratComponent {

  contrats: Contrat[];
  employee: Employee;
  showAddContrat: boolean = false;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private contratService: ContratService){
  }

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(employeeId);
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
    });
    this.contratService.getContratsByEmploye(employeeId).subscribe((employee) => {
      this.contrats = employee;
      console.log(this.contrats);
    }
    );
  }

  showAddContratForm(){
    this.showAddContrat = !this.showAddContrat;
  }
  
}
