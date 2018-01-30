import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CreatetokenComponent } from './createtoken/createtoken.component';
import { AppRoutingModule } from './/app-routing.module';
import { TokentradeComponent } from './tokentrade/tokentrade.component';


@NgModule({
  declarations: [
    AppComponent,
    CreatetokenComponent,
    TokentradeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
