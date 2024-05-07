import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/employees/employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CongeComponent } from './employee/conge/conge.component';
import { ContratComponent } from './employee/contrat/contrat.component';
import { MetierComponent } from './employee/metier/metier.component';
import {BulletinPaieComponent} from "./employee/bulletin-paie/bulletin-paie.component";
import {BulletinPaieListComponent} from "./employee/bulletin-paie/bulletin-paie-list/bulletin-paie-list.component";
import {SearchEmployeeComponent} from "./employee/search-employee/search-employee.component";

const routes: Routes = [
  {path:'employees', component: EmployeesComponent},
  {path:'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'conge-employee/:id', component:CongeComponent},
  {path: 'contrat-employee/:id', component: ContratComponent},
  {path: 'metier-employee/:id', component: MetierComponent},
  {path: 'payroll-employee/:id', component: BulletinPaieComponent },
  {path: 'payroll-employee-list/:id', component: BulletinPaieListComponent },
  {path: 'search-employee', component: SearchEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
