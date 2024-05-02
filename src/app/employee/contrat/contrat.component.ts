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
  employeeId: number;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private contratService: ContratService){
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
    });
    this.contratService.getContratsByEmploye(employeeId).subscribe((contrat) => {
        this.contrats = contrat;
        console.log(this.contrats);
      }
    );
  }

  deleteContrat(id: number) {
    this.contratService.deleteContrat(id).subscribe(()=>
    this.getData()
    );
  }

  showAddContratForm(){
    this.showAddContrat = !this.showAddContrat;
  }

  OnNewContrat(contratData: Contrat) {
    this.employeeId = contratData.empId;
    this.contratService.addContrat(this.employeeId,contratData).subscribe(()=>
    this.getData()
    );
  }

}
