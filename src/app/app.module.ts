import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeItemComponent } from './employee/employee-item/employee-item.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeesComponent } from './employee/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeItemComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
