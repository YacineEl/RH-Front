import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employee/employees/employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { CongeComponent } from './employee/conge/conge.component';

const routes: Routes = [
  {path:'employees', component: EmployeesComponent},
  {path:'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'conge-employee/:id', component:CongeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
