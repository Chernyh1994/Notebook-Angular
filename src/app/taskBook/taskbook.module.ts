import {NgModule} from '@angular/core';
import {TaskbookComponent} from './taskbook.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {DemoMaterialModule} from '../material-module';



@NgModule({
    imports: [
        RouterModule,
        DemoMaterialModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
  ],
  declarations: [
    TaskbookComponent
  ],
  entryComponents: [TaskbookComponent],
  exports: [
    TaskbookComponent
  ],
})
export class TaskbookModule { }