import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  serviceURL : string;
  constructor(private http: HttpClient) {
    this.serviceURL="http://localhost:8000"
   }

  allDepartment() : Observable<any>{
    return this.http.get<any>(this.serviceURL+"/department")
   }
   deleteDepartment(id:any) : Observable<any>{
    return this.http.delete<any>(this.serviceURL+"/department/"+id)
   }
   adddept(items:any) : Observable<any>{
    return this.http.post<any>(this.serviceURL+"/department",items)
   }
   getoneDepart(id:any) : Observable<any>{
    return this.http.get<any>(this.serviceURL+"/department/"+id)
   }
   editDept(items:any):Observable<any>{
    return this.http.put<any>(this.serviceURL+"/department",items)
   }

}
