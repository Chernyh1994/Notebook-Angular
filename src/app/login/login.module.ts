import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatSliderModule,
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
