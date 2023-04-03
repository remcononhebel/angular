import { MockComponent } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookListComponent } from './book-list/book-list.component';
import { provideMockStore } from '@ngrx/store/testing';
import { BookCollectionComponent } from './book-collection/book-collection.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(BookListComponent), MockComponent(BookCollectionComponent)],
    imports: [HttpClientTestingModule],
    providers: [provideMockStore({ initialState: { books: { books: [] }, collection: { selectedBooks: [] } } })],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
