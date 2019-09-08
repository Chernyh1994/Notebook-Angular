import {NgModule} from '@angular/core';
import {TimerComponent} from './timer.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        RouterModule
  ],
  declarations: [
    TimerComponent
  ],
  entryComponents: [TimerComponent],
  exports: [
    TimerComponent
  ],
})
export class TimerModule { }