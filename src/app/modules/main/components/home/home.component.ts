import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';
import { Book } from '../../../../services/book/book';
import { BookService } from '../../../../services/book/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BookService]
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService) {
  }

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
    resize: true,
    initLayout: true,
    fitWidth: true,
  };

  masonryImages: any[];
  limit = 5;
  dummyPictures: Book[];

  ngOnInit() {
    this.bookService.getAllBooks()
    .subscribe(data => this.dummyPictures = data);
  }

  showMoreImages(): void {
    this.limit += 5;
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

}
