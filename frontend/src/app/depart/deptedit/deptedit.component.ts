import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-deptedit',
  templateUrl: './deptedit.component.html',
  styleUrls: ['./deptedit.component.css']
})
export class DepteditComponent implements OnInit {
  data={

  }
  departname:any;
  thisdata:any;
  id:any;
  departnameget:any;
  daat:any;

  constructor(private auth:ServicesService, private route:ActivatedRoute, private rout:Router) { }
  
  ngOnInit(): void {
this.route.paramMap.subscribe((res)=>
    this.id=res
)
console.log(this.id.params.id)
this.fetchitem()

}
  fetchitem(){
    this.auth.getoneDepart(this.id.params.id).subscribe((data)=>this.aligndata(data))

  }
  aligndata(data:any){
    this.thisdata=data;
    this.daat=data[0].Departmentname;
  }
  submitedit(){
    this.data={
      "Departmentid": this.thisdata[0].Departmentid,
      "Departmentname": this.departnameget
    }
    console.log(this.thisdata)
    this.auth.editDept(this.data).subscribe((data)=>console.log("success"))
    this.rout.navigate(["/home"])
  }
}
