import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.state';
import { Book } from '../../model/book.model';

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
