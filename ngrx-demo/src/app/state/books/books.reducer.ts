import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './books.actions';
import { BooksState } from './books.state';

export const initialState: BooksState = {
  books: []
};

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => {
    return {
      ..._state,
      books
    }
  })
);
