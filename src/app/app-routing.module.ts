import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homeRoute } from './components/home/home.routing';

const routes: Routes = [ ...homeRoute,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
