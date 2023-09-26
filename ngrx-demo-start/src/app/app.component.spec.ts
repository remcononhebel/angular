import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
import { mockBooks } from './mocks/book.mocks';
import { BooksApiServiceJestMock } from './service/books-api.service.jest-mock';
import { selectAvailableBooks } from './state/books/books.selectors';
import { CollectionActions } from './state/collection/collection.actions';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockStore: MockStore;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(BookListComponent), MockComponent(BookCollectionComponent)],
    imports: [HttpClientTestingModule],
    providers: [provideMockStore({ initialState: { books: { books: [] }, collection: { selectedBooks: [] } } }), BooksApiServiceJestMock.provide()],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;

    mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('should match snapshot when selector returns books', () => {
    mockStore.setState({
      books: { books: mockBooks },
      collection: { selectedBooks: [] },
    });
    spectator.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

  describe('onAdd', () => {
    it('should dispatch addBook', () => {
      jest.spyOn(mockStore, 'dispatch');
      const mockBookId = 'mock id';
      component.onAdd(mockBookId);

      expect(mockStore.dispatch).toHaveBeenCalledWith(CollectionActions.addBook({ bookId: mockBookId }));
    });
  });

  describe('onRemove', () => {
    it('should dispatch removeBook', () => {
      jest.spyOn(mockStore, 'dispatch');
      const mockBookId = 'mock id';
      component.onRemove(mockBookId);

      expect(mockStore.dispatch).toHaveBeenCalledWith(CollectionActions.removeBook({ bookId: mockBookId }));
    });
  });

  describe('selectAll', () => {
    let dispatchSpy: jest.SpyInstance;

    beforeEach(() => {
      dispatchSpy = jest.spyOn(mockStore, 'dispatch');

      spectator.detectChanges();
    });

    afterEach(() => {
      mockStore.resetSelectors();
      dispatchSpy.mockReset();
    });

    it('should dispatch the CollectionActions.selectBooks action', () => {
      mockStore.overrideSelector(selectAvailableBooks, [...mockBooks]);
      const allBookIds = mockBooks.map(({ id }) => id);

      component.selectAll();

      expect(dispatchSpy).toHaveBeenCalledWith(CollectionActions.selectBooks({ bookIds: allBookIds }));
    });

    it('should not dispatch the CollectionActions.selectBooks action if there are no books availabel', () => {
      mockStore.overrideSelector(selectAvailableBooks, []);

      component.selectAll();

      expect(dispatchSpy).not.toHaveBeenCalled();
    });
  });

  describe('removeAll', () => {
    it('should dispatch the CollectionActionsdeselectAllBooks action', () => {
      const spy = jest.spyOn(mockStore, 'dispatch');

      component.deselectAll();

      expect(spy).toHaveBeenCalledWith(CollectionActions.deselectAllBooks());
    });
  });
});
