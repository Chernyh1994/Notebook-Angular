import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  postData(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book);
  }

}
