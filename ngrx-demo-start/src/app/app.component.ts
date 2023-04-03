import { Component, OnInit } from '@angular/core';
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
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo-start';

  books$ = this.store.select(selectAvailableBooks);
  numberOfAvailableBooks$ = this.store.select(selectNumberOfAvailableBooks);

  bookCollection$ = this.store.select(selectBookCollection);
  numberOfBooksInCollections$ = this.store.select(selectNumberOfBooksInCollection);

  constructor(private readonly store: Store, private readonly booksApiService: BooksApiService) {}

  ngOnInit(): void {
    this.booksApiService.getBooks().subscribe((books: Book[]) => {
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }

  selectAll() {
    this.store.select(selectAvailableBooks).subscribe((books) => {
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
