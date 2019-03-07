import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  
  @Input() employeeDetails = { firstName: '', lastName: '' }

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() {
  }
  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
     // console.log(dataEmployee);
      this.router.navigate(['/employees-list'])
    })
  }
}
