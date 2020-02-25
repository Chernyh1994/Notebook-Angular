import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulev } from '../../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthRoutingModule } from './auth-router.module';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    MaterialModulev,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ LoginComponent, RegistrationComponent ]
})
export class AuthModule { }
