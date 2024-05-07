import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {Employee} from "../employee.model";
import {EmployeeService} from "../service/employee.service";
import {ContratService} from "../service/contrat/contrat.service";
import {Contrat} from "../models/contrat.model";
import {MetierService} from "../service/metier/metier.service";
import {Metier} from "../models/metier.model";

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {

  contrats: Observable<Contrat[]>;
  employees$: Observable<Employee[]>;
  // emplooyees: Employee[];
  filteredEmployees$: Observable<Employee[]>;
  metiers: string[];

  salary: number;
  metier: string;

  constructor(private employeeService: EmployeeService, private contratService: ContratService, private metierService: MetierService) { }

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
    this.filteredEmployees$ = this.employees$;
    this.contrats = this.contratService.getContrats();
    // this.employeeService.getEmployees().subscribe((employees) => {this.emplooyees=employees});
    this.fetchMetiers();
    this.employees$.subscribe(employees => {
      console.log('Employees:', employees);
    });
  }

  public filterEmployees(salary: number, metier: string): Observable<Employee[]> {
    return this.employees$.pipe(
      map(employees => {
        return employees.filter(employee => {
          let salaryMatch = true;
          let genderMatch = true;
          let metierMatch = true;

          console.log('salary', salary);
          console.log(employee.contrat);
          // Check if salary filter is applied
          if (salary && employee.contrat) {
            console.log('salary', salary);
            salaryMatch = employee.contrat.salaireBrut >= salary;
          }

          // Check if metier filter is applied
          if (metier && employee.metier) {
            console.log('metier', metier);
            metierMatch = employee.metier.libelle === metier;
          }

          return salaryMatch && metierMatch;
        });
      })
    );
  }

  applyFilter(): void {
    this.filteredEmployees$ = this.filterEmployees(this.salary, this.metier);
    this.filteredEmployees$.subscribe(employees => {
      console.log('Employees:', employees);
    });
  }


  fetchMetiers(): void {
    this.metierService.getMetiers().subscribe((metiers: Metier[]) => {
      this.metiers = metiers.map((metier:Metier)=>metier.libelle);
    });
  }

}
