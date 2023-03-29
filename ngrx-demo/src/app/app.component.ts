import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { Book } from './model/book.model';
import { BooksApiService } from './service/books-api.service';
import { BooksApiActions } from './state/books/books.actions';
import { selectAvailableBooks, selectNumberOfAvailableBooks } from './state/books/books.selectors';
import { CollectionActions } from './state/collection/collection.actions';
import { selectBookCollection, selectNumberOfBooksInCollection } from './state/collection/collection.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  books$ = this.store.select(selectAvailableBooks);
  numberOfAvailableBooks$ = this.store.select(selectNumberOfAvailableBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  numberOfBooksInCollections$ = this.store.select(selectNumberOfBooksInCollection);

  constructor(private booksService: BooksApiService, private store: Store) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books: Book[]) =>
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }
}
