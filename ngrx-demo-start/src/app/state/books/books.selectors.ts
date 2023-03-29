import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from 'src/app/model/book.model';
import { BooksState } from './books.state';

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectAvailableBooks = createSelector(
  selectBooksState,
  (booksState: BooksState) => {
    return booksState.books;
  }
);

export const selectNumberOfAvailableBooks = createSelector(
  selectAvailableBooks,
  (books: Book[]) => books.length
);