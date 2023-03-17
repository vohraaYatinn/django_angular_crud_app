import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdditemComponent } from './depart/additem/additem.component';
import { DepartCrudComponent } from './depart/depart-crud/depart-crud.component';
import { DepartViewComponent } from './depart/depart-view/depart-view.component';
import { DepteditComponent } from './depart/deptedit/deptedit.component';


@NgModule({

  declarations: [
    AppComponent,    
    DepartViewComponent,
    DepartCrudComponent,
    AdditemComponent,
    DepteditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
