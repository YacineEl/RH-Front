import { Component } from '@angular/core';
import {map, Observable, of} from "rxjs";
import {Employee} from "../employee.model";
import {EmployeeService} from "../service/employee.service";
import {MetierService} from "../service/metier/metier.service";
import {Metier} from "../models/metier.model";

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrl: './search-employee.component.css'
})
export class SearchEmployeeComponent {

  employees$: Observable<Employee[]>;
  employees : Employee[];
  selectedEmployee: Employee;
  filteredEmployees$: Observable<Employee[]>;
  salary: number;
  metier: string;
  metiers: any;


  constructor(private employeeService: EmployeeService,private metierService: MetierService) { }

  ngOnInit(): void {
    this.fetchMetiers();
    this.employees$ = this.employeeService.getEmployees();
    // this.filteredEmployees$ = this.employees$;
    // this.employees$.subscribe(employees => {
    //   console.log('Employees:', employees);
    // });
  }

  public filterEmployees(): void {
    console.log("click");
    this.employeeService.getEmployeesWithFilters(this.salary,this.metier).subscribe((employees)=>
      this.filteredEmployees$ = of(employees)
    );
    this.filteredEmployees$.subscribe(employees => {
      console.log('Employees:', employees);
    });
  }
  fetchMetiers(): void {
    this.metierService.getMetiers().subscribe((metiers: Metier[]) => {
      const uniqueMetiersSet = new Set<string>();
      metiers.forEach(metier => uniqueMetiersSet.add(metier.libelle));

      this.metiers = Array.from(uniqueMetiersSet);
    });
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee=employee;
  }

  protected readonly Employee = Employee;
}
