import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';

export interface Item {
  task: string;
  position: number;
  done: boolean;
}
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'taskbook-comp',
  templateUrl: './taskbook.component.html',
  styleUrls: ['./taskbook.component.css'],
})
export class TaskbookComponent {
  displayedColumns: string[] = ['position', 'task', 'done','delete'];
   
  tasks = []

  dataSource = new MatTableDataSource(this.tasks);

  constructor(){ 
  }
  
  onSubmit(f: NgForm) {
     this.tasks.push(
      {
        task:f.value.task,
        position: this.tasks.length + 1,
        done: false
      })
      this.dataSource = new MatTableDataSource(this.tasks);
      console.log(this.tasks)
  }
  
}
