import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MaterialModulev } from '../../material.module';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [NavigationComponent, MenuComponent],
  imports: [
    CommonModule,
    MaterialModulev
  ],
  exports: [ NavigationComponent ]
})
export class NavigationModule { }
