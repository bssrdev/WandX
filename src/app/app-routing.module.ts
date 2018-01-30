import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { CreatetokenComponent } from './createtoken/createtoken.component'; 
import { TokentradeComponent } from './tokentrade/tokentrade.component'; 


const routes: Routes = [

{
	path:'createtoken',
	component: CreatetokenComponent
},

{
	path:'tokentrade',
	component: TokentradeComponent
}

];


@NgModule({
	/*
  imports: [
    CommonModule
  ],*/
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
