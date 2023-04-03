import { createReducer, on } from '@ngrx/store';
import { CollectionState } from './collection.state';
import { CollectionActions } from './collection.actions';

export const initialState: CollectionState = {
  selectedBooks: [],
};

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.addBook, (state, { bookId }) => {
    if (state.selectedBooks.some((id) => id === bookId)) {
      return state;
    }

    return {
      ...state,
      selectedBooks: [...state.selectedBooks, bookId],
    };
  }),
  on(CollectionActions.removeBook, (state, { bookId }) => ({
    ...state,
    selectedBooks: state.selectedBooks.filter((id) => id !== bookId),
  })),
  on(CollectionActions.selectBooks, (state, { bookIds }) => ({
    ...state,
    selectedBooks: [...bookIds],
  }))
);
