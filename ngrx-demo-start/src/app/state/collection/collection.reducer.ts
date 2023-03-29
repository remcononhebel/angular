import { createReducer, on } from '@ngrx/store';
import { CollectionState } from './collection.state';
import { CollectionActions } from './collection.actions';

export const initialState: CollectionState = {
  books: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.removeBook, (state, { bookId }) => ({
    books: state.books.filter((id) => id !== bookId),
  })),
  on(CollectionActions.addBook, (state, { bookId }) => {
    if (state.books.some((id) => id === bookId)) {
      return state;
    }

    return {
      ...state,
      books: [...state.books, bookId],
    };
  })
);
