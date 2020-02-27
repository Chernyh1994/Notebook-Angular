import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './book';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  postData(book: Book): Observable<Book> {
    return this.http.post<Book>('http://localhost:3000/books', book)
    .pipe(
      catchError(this.handleError<Book>('postData'))
    );
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000/books/findAllBooks')
    .pipe(
      catchError(this.handleError<Book[]>('getAllBooks', []))
    );
  }

  getBook(id: number): Observable<Book> {
    const url = `http://localhost:3000/books/detailBook/${id}`;
    return this.http.get<Book>(url).pipe(
      tap(_ => console.log(`fetched book id=${id}`)),
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
