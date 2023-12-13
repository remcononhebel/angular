import { mockBooks } from '../../mocks/book.mocks';
import { BooksApiActions } from './books.actions';
import { booksReducer } from './books.reducer';
import { BooksState } from './books.state';

describe('booksReducer', () => {
  it('should handle BooksApiActions.retrievedBookList', () => {
    const state: BooksState = {
      books: [],
    };

    const books = [...mockBooks];
    const action = BooksApiActions.retrievedBookList({ books });
    expect(booksReducer(state, action)).toMatchSnapshot();
  });
});
