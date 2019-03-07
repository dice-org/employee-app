import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { RouterModule, Routes } from '@angular/router';

// Forms module
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'update-employee/:id', component: EmployeeUpdateComponent },

  { path: 'employees-list', component: EmployeesListComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeDetailsComponent,
    EmployeeUpdateComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
   [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
