import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  departname:string="";
 
  data:any;
  
  editTaskValue:any;
  constructor(private auth:ServicesService, private route:Router) { }

  ngOnInit(): void {
  }

  sendsubmit(){
    this.data={ 
      "Departmentname": this.departname
  }
    // this.data.push(this.departname);
   this.auth.adddept(this.data).subscribe((data)=>console.log("success"))
    return this.route.navigate(['/home'])
  }

}
