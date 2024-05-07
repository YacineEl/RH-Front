import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { EmployeeItemComponent } from './employee/employee-item/employee-item.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CongeComponent } from './employee/conge/conge.component';
import { AddCongeComponent } from './employee/conge/add-conge/add-conge.component';
import { ContratComponent } from './employee/contrat/contrat.component';
import { AddContratComponent } from './employee/contrat/add-contrat/add-contrat.component';
import { MetierComponent } from './employee/metier/metier.component';
import { AddMetierComponent } from './employee/metier/add-metier/add-metier.component';
import { BulletinPaieComponent } from './employee/bulletin-paie/bulletin-paie.component';
import { BulletinPaieItemComponent } from './employee/bulletin-paie/bulletin-paie-item/bulletin-paie-item.component';
import { BulletinPaieListComponent } from './employee/bulletin-paie/bulletin-paie-list/bulletin-paie-list.component';
import { BulletinPaieItemDetailsComponent } from './employee/bulletin-paie/bulletin-paie-item-details/bulletin-paie-item-details.component';
import { SearchEmployeeComponent } from './employee/search-employee/search-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CongeComponent,
    AddCongeComponent,
    ContratComponent,
    AddContratComponent,
    MetierComponent,
    AddMetierComponent,
    BulletinPaieComponent,
    BulletinPaieItemComponent,
    BulletinPaieListComponent,
    BulletinPaieItemDetailsComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
