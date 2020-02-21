import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModulev } from '../../material.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModulev,
  ],
  exports: [ LoginComponent ]
})
export class LoginModule { }
