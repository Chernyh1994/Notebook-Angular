import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModulev } from '../../material.module';
import { AuthRoutingModule } from './auth-router.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './components/registration/registration.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModulev,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ LoginComponent ]
})
export class AuthModule { }
