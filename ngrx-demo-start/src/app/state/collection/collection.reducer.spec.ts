import { mockBooks } from '../../mocks/book.mocks';
import { CollectionActions } from './collection.actions';
import { collectionReducer } from './collection.reducer';
import { CollectionState } from './collection.state';

describe('collectionReducer', () => {
  describe('addBook', () => {
    it('should add a book', () => {
      const state: CollectionState = {
        selectedBooks: [],
      };
      expect(collectionReducer(state, CollectionActions.addBook({ bookId: 'mock book id' }))).toMatchSnapshot();
    });

    it('should not add a book when it is already in the state', () => {
      const bookId = 'mock book id';
      const state: CollectionState = {
        selectedBooks: [bookId],
      };
      expect(collectionReducer(state, CollectionActions.addBook({ bookId }))).toMatchSnapshot();
    });
  });

  describe('removeBook', () => {
    it('should remove a book that is in the state', () => {
      const bookId = 'mock book id';
      const state: CollectionState = {
        selectedBooks: [bookId],
      };
      expect(collectionReducer(state, CollectionActions.removeBook({ bookId }))).toMatchSnapshot();
    });

    it('should not remove a book that is not in the state', () => {
      const bookId = 'mock book id';
      const state: CollectionState = {
        selectedBooks: [bookId],
      };
      expect(collectionReducer(state, CollectionActions.removeBook({ bookId: 'does not exist' }))).toMatchSnapshot();
    });
  });

  describe('selectBooks', () => {
    it('should select multiple books', () => {
      const state: CollectionState = { selectedBooks: [] };
      expect(collectionReducer(state, CollectionActions.selectBooks({bookIds: mockBooks.map(({id}) => id)}))).toMatchSnapshot();
    });
  });
});
