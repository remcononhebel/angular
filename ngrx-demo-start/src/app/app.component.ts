import { Component } from '@angular/core';
import { Book } from './model/book.model';
import { BooksApiService } from './service/books-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo-start';
  books: Book[] = [];

  constructor(private readonly booksService: BooksApiService) {
    this.booksService.getBooks().subscribe((books: Book[]) => {
      this.books = [...books];
    });
  }

  onAdd(id: string) {
    alert(`TODO: boek met id ${id} toevoegen aan collection`);
  }
}
