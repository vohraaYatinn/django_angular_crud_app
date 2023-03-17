import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './depart/additem/additem.component';
import { DepartViewComponent } from './depart/depart-view/depart-view.component';
import { DepteditComponent } from './depart/deptedit/deptedit.component';

const routes: Routes = [
  {path:'',component:DepartViewComponent},
  {path:'home',component:DepartViewComponent},
  {path:'departadd',component:AdditemComponent},
  {path:'deptedit/:id',component:DepteditComponent},
  {path:'deptadd',component:AdditemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
