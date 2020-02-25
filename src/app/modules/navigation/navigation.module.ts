import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModulev } from '../../material.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [NavigationComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModulev,
    RouterModule
  ],
  exports: [ NavigationComponent ]
})
export class NavigationModule { }
