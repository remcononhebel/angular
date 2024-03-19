import { mockBooks } from '../../mocks/book.mocks';
import { BooksApiActions } from './books.actions';
import { booksReducer, initialState } from './books.reducer';
import { BooksState } from './books.state';

describe('booksReducer', () => {
  it('should handle BooksApiActions.loadBookListSuccessful', () => {
    const state: BooksState = {...initialState};

    const books = [...mockBooks];
    const action = BooksApiActions.loadBookListSuccessful({ books });
    expect(booksReducer(state, action)).toMatchSnapshot();
  });

  it('should handle BooksApiActions.loadBookListFailed', () => {
    const state: BooksState = {
      books: [],
      error: null
    };

    const action = BooksApiActions.loadBookListFailed({ error: 'mock error' });
    expect(booksReducer(state, action)).toMatchSnapshot();
  });
});
