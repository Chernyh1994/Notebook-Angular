import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModulev } from '../../material.module';
import { NgxMasonryModule } from 'ngx-masonry';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { MainRoutingModule } from './main-router.module';
import { AddBookComponent } from './components/addBook/add-book.component';
import { DetailBookComponent } from './components/detailBook/detail-book.component';


@NgModule({
  declarations: [HomeComponent, AddBookComponent, DetailBookComponent],
  imports: [
    CommonModule,
    MaterialModulev,
    NgxMasonryModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent]

})
export class MainModule { }
