import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontcrudComponent } from './frontcrud/frontcrud.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminStateComponent } from './admin-state/admin-state.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontcrudComponent,
    CompanyListComponent,
    AdminStateComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
