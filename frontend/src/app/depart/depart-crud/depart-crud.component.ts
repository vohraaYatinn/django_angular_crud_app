import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-depart-crud',
  templateUrl: './depart-crud.component.html',
  styleUrls: ['./depart-crud.component.css']
})
export class DepartCrudComponent implements OnInit {
  table:any
  constructor(private auth:ServicesService,private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchall()
  }
fetchall(){
  return this.auth.allDepartment().subscribe((res)=>{
    console.log(res)
    this.table=res},(err:Error)=>alert("login failed"));
}
delete(id:any){
  console.log(id)
  return this.auth.deleteDepartment(id).subscribe((res)=>
  this.fetchall()
  )


}

}