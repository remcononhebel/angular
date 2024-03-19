import { mockBooks } from '../../mocks/book.mocks';
import { BooksState } from '../books/books.state';
import { selectBookCollection, selectNumberOfBooksInCollection } from './collection.selectors';
import { CollectionState } from './collection.state';

describe('CollectionSelectors', () => {
  const booksState: BooksState = {
    books: [...mockBooks],
    error: null
  };

  const collectionStateNoBooks: CollectionState = {
    selectedBooks: [],
  };

  const collectionStateOneBook: CollectionState = {
    selectedBooks: [mockBooks[0].id],
  };
  const collectionStateAllBooks: CollectionState = {
    selectedBooks: mockBooks.map(({ id }) => id),
  };

  describe('selectBookCollection', () => {
    it('should return empty array when no books are selected', () => {
      const collectionState: CollectionState = {
        ...collectionStateNoBooks,
      };
      expect(selectBookCollection.projector(booksState, collectionState)).toMatchSnapshot();
    });

    it('should return one book when one book is selected', () => {
      const collectionState: CollectionState = {
        ...collectionStateOneBook,
      };
      expect(selectBookCollection.projector(booksState, collectionState)).toMatchSnapshot();
    });

    it('should return one book when one book is selected', () => {
      const collectionState: CollectionState = {
        ...collectionStateAllBooks,
      };
      expect(selectBookCollection.projector(booksState, collectionState)).toMatchSnapshot();
    });
  });

  describe('selectNumberOfBooksInCollection', () => {
    it('should say that there are no books in the collection if the collection is empty', () => {
      expect(selectNumberOfBooksInCollection.projector(2, [])).toMatchSnapshot();
    });

    it('should say that there is one out of three books in the collection', () => {
      expect(selectNumberOfBooksInCollection.projector(2, [mockBooks[0]])).toMatchSnapshot();
    });

    it('should say that all books are selected', () => {
      expect(selectNumberOfBooksInCollection.projector(2, [...mockBooks])).toMatchSnapshot();
    });
  });
});
