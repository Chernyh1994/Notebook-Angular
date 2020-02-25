import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulev } from '../../material.module';
import { NgxMasonryModule } from 'ngx-masonry';

import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-router.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModulev,
    NgxMasonryModule,
    MainRoutingModule
  ],
  exports: [HomeComponent]

})
export class MainModule { }
