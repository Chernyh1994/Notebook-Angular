import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponent} from './header.component';
import {DemoMaterialModule} from '../material-module';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        BrowserModule,
        RouterModule
  ],
  declarations: [
    MenuComponent
  ],
  entryComponents: [MenuComponent],
  exports: [
    MenuComponent
  ],
})
export class HeaderModule { }
