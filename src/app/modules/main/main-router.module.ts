import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddBookComponent } from './components/addBook/add-book.component';
import { DetailBookComponent } from './components/detailBook/detail-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'addBook', component: AddBookComponent},
  { path: 'details/:id', component: DetailBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
