
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  baseurl='#'
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }

  // creating method getting all records
  getAllEmployee():Observable<Employee[]>{
      return this.http.get<Employee[]>(this.baseurl);

  }
  //creating method for getting one record with help of id
  getEmployeeById(employeeId:number):Observable<Employee>{
    return this.http.get<Employee>(this.baseurl+"/"+employeeId);
  }


  createEmployee(employee:Employee):Observable<Employee>{
    let options={
      headers:this.httpHeaders

    };
   return this.http.post<Employee>(this.baseurl,employee,options)
  }  

  UpdateEmployee(employeeId:any):Observable<any>{
    let options={
      headers:this.httpHeaders

    };
   return this.http.put<Employee>(this.baseurl,+"/"+employeeId,options)
  } 

  DeleteEmployee(employeeId:any):Observable<any>{
    let options={
      headers:this.httpHeaders

    };
   return this.http.delete<Employee>(this.baseurl,+"/"+employeeId)
  } 

}
