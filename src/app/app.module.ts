import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OnSalePipe } from './on-sale.pipe';
// import { DoanVueButton }  from 'doan-vue-button-1';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OnSalePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // DoanVueButton,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
