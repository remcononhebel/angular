import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs';
import { BooksPageActions } from './state/books/books.actions';
import { selectAvailableBooks, selectNumberOfAvailableBooks } from './state/books/books.selectors';
import { CollectionActions } from './state/collection/collection.actions';
import { selectBookCollection, selectNumberOfBooksInCollection } from './state/collection/collection.selectors';

@Component({
  selector: 'ngrx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';

  books$ = this.store.select(selectAvailableBooks);
  numberOfAvailableBooks$ = this.store.select(selectNumberOfAvailableBooks);

  bookCollection$ = this.store.select(selectBookCollection);
  numberOfBooksInCollections$ = this.store.select(selectNumberOfBooksInCollection);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(BooksPageActions.loadBookList());
  }

  onAdd(bookId: string) {
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }

  selectAll() {
    this.books$.pipe(first()).subscribe((books) => {
      if (books.length > 0) {
        const bookIds = books.map(({ id }) => id);
        this.store.dispatch(CollectionActions.selectBooks({ bookIds }));
      }
    });
  }

  deselectAll() {
    this.store.dispatch(CollectionActions.deselectAllBooks());
  }
}
