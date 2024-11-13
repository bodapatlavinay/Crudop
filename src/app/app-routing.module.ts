import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontcrudComponent } from './frontcrud/frontcrud.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  {path:'frontcrud', component:FrontcrudComponent},
  {path:'company-list', component:CompanyListComponent},
  {path:'', component:CompanyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
