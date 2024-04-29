import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CapitalizePipe } from './capitalize.pipe'; // Import the pipe here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    EmployeeDetailsComponent,
    CapitalizePipe // Add the pipe to declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
