import { Actions } from "@ngrx/effects";
import { of, throwError } from "rxjs";
import { mockBooks } from "../../mocks/book.mocks";
import { BooksApiService } from "../../service/books-api.service";
import { BooksApiActions, BooksPageActions } from "./books.actions";
import { BooksEffects } from "./books.effects";

const booksApiServiceMock = {
  getBooks: jest.fn()
};

describe('BooksEffects', () => {
  let effects: BooksEffects;

  const initEffects = (actions: Actions): void => {
    effects = new BooksEffects(actions, booksApiServiceMock as unknown as BooksApiService);
  };

  describe('Load Book List', () => {
    it('should dispatch loadBookListSuccessful', (done: jest.DoneCallback) => {
      booksApiServiceMock.getBooks.mockReturnValue(of(mockBooks));

      initEffects(new Actions(of(BooksPageActions.loadBookList())))

      effects.loadBooks$.subscribe(actual => {
        expect(actual).toEqual(BooksApiActions.loadBookListSuccessful({ books: mockBooks }))
        done();
      });
    });

    it('should dispatch loadBookListFailed', (done: jest.DoneCallback) => {
      booksApiServiceMock.getBooks.mockReturnValue(throwError(() => new Error('mock error')));

      initEffects(new Actions(of(BooksPageActions.loadBookList())))

      effects.loadBooks$.subscribe(actual => {
        expect(actual).toEqual(BooksApiActions.loadBookListFailed({ error: 'Failed to load books: mock error' }))
        done();
      })
    });
  });
});