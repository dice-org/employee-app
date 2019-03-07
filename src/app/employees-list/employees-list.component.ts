import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];
  interval: any;

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
  //  this.loadEmployees(); 

    this.interval = setInterval(() => { 
      this.loadEmployees(); 
  }, 500);

   // this.loadEmployees()

  }

    // Get employees list
    loadEmployees() {
      return this.restApi.getEmployees().subscribe((data: {}) => {
        this.Employee = data;
      })
    }


    
  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        //this.loadEmployees()
        location.reload();

      })
    }
   

  } 



}
