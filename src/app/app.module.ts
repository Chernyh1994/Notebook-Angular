import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderModule} from './menu/header.module';
import {TimerModule} from './timer/timer.module'
import {TaskbookModule} from './taskBook/taskbook.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    TimerModule,
    TaskbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
