import { MockComponent } from 'ng-mocks';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookListComponent } from './book-list/book-list.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(BookListComponent)],
    imports: [HttpClientTestingModule],
    providers: [provideMockStore({ initialState: { books: { books: [] } } })],
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
