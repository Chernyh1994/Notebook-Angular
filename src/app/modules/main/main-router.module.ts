import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/addBook/add-book.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'addBook', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
