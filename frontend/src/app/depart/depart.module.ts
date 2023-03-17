import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartViewComponent } from './depart-view/depart-view.component';
import { DepartCrudComponent } from './depart-crud/depart-crud.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DepteditComponent } from './deptedit/deptedit.component';




@NgModule({
  declarations: [
    DepartViewComponent,
    DepartCrudComponent,
    DepteditComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    NgModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,

  ],
  bootstrap:[DepartViewComponent]
})
export class DepartModule { }
