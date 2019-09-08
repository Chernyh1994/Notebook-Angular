import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimerComponent} from './timer/timer.component';
import {TaskbookComponent} from './taskBook/taskbook.component';



const routes: Routes = [
  { path: 'timer', component: TimerComponent},
  { path: 'home', redirectTo: '/'},
  { path: 'taskbook', component: TaskbookComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
