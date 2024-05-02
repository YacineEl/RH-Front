import { Component, SimpleChanges } from '@angular/core';
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
    this.getData();
  }

  getData(){
    const employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(employeeId).subscribe((employee) => {
      this.employee = employee;
    });
    console.log("GetData")
    this.congeService.getCongesByEmploye(employeeId).subscribe((conge) => {
      this.conges = conge;
    }
    );
  }

  showAddCongeForm(): void {
    this.showAddConge = !this.showAddConge;
  }
  deleteConge(id: number): void {
    this.congeService.deleteConge(id).subscribe(()=>
    this.getData()
  );
  }
  onNewConge(congeData: Conge): void {
    this.employeeId = congeData.empId;
    this.congeService.addConge(this.employeeId, congeData).subscribe(() =>
    this.getData()
    );
  }
}
