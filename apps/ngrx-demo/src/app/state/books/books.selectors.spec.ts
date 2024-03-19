import { mockBooks } from '../../mocks/book.mocks';
import { selectAvailableBooks, selectNumberOfAvailableBooks } from './books.selectors';
import { BooksState } from './books.state';

describe('BooksSelectors', () => {
  describe('selectAvailableBooks', () => {
    it('should return the books from the state', () => {
      const mockState: BooksState = {
        books: [...mockBooks],
        error: null
      };
      expect(selectAvailableBooks.projector(mockState)).toMatchSnapshot();
    });
  });

  describe('selectNumberOfAvailableBooks', () => {
    it('should return the number of available books in the store', () => {
      expect(selectNumberOfAvailableBooks.projector(mockBooks)).toEqual(2);
    });
  });
});
