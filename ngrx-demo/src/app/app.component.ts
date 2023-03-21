import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from './model/book.model';
import { BooksApiService } from './service/books-api.service';
import { BooksApiActions } from './state/books/books.actions';
import { selectAvailableBooks, selectBookCollection } from './state/books/books.selectors';
import { CollectionActions } from './state/collection/collection.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectAvailableBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }

  constructor(private booksService: BooksApiService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books: Book[]) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }
}