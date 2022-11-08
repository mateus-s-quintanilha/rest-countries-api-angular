import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'prefix'},
  {path: 'home/:id', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
