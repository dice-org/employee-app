import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  apiURL = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }
 /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

     
    }
    )
  
    
  }
  

    // HttpClient API get() method => Fetch employee
    getEmployee(id): Observable<Employee> {
      return this.http.get<Employee>(this.apiURL + '/employee/' + id)
      
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
      
    }  

    // HttpClient API get() method => Fetch employees list
    getEmployees(): Observable<Employee> {
      return this.http.get<Employee>(this.apiURL + '/employee',  )
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }


    // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employee', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  deleteEmployee(id){
    return this.http.delete<Employee>(this.apiURL + '/employee/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<string> {


    return this.http.put<string>(this.apiURL + '/employee/' + id,
  
    JSON.stringify(employee),
    this.httpOptions
  
    )
    
    .pipe(
      retry(1),
      
      catchError(this.handleError)
    )
 



    
  }


  


    handleError(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
   }
    
}
