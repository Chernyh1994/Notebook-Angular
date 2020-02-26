import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Book } from '../../../../services/book/book';
import { BookService } from '../../../../services/book/book.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  providers: [BookService]
})
export class AddBookComponent implements OnInit {

  public newBookForm: FormGroup;
  public book: Book = new Book();
  public receivedBook: Book;
  done = false;

  constructor(private bookService: BookService) {
   this.newBookForm = new FormGroup({
      nameBook: new FormControl(),
      aboutBook: new FormControl(),
      imgURL: new FormControl()
    });
   }

  ngOnInit(): void {
  }

  onSubmit(book: Book): void {
    this.bookService.postData(book)
    .subscribe(
        (data: Book) => { this.receivedBook = data; this.done = true; },
        (error: HttpErrorResponse) => {
          console.log(error.error);  });
    // console.log(book);
  }

}
