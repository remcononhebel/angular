import { createReducer } from '@ngrx/store';
import { BooksState } from './books.state';

export const initialState: BooksState = {
  books: [
    {
      id: '1',
      volumeInfo: {
        authors: ['Author 1', 'Co-author 1'],
        title: 'Book 1',
      },
    },
    {
      id: '2',
      volumeInfo: {
        authors: ['Author 2', 'Co-author 2'],
        title: 'Book 2',
      },
    },
  ],
};

export const booksReducer = createReducer(initialState);
