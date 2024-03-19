import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './books.actions';
import { BooksState } from './books.state';

export const initialState: BooksState = {
  books: [],
  error: null,
};

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.loadBookListSuccessful, (state, { books }) => {
    return {
      ...state,
      books,
    };
  }),
  on(BooksApiActions.loadBookListFailed, (state, { error }) => {
    return {
      ...state,
      books: [],
      error,
    };
  }),
);
