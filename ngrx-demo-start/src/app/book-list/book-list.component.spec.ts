import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { BookListComponent } from './book-list.component';
import { ComponentFixture } from '@angular/core/testing';

describe('BookListComponent', () => {
  let spectator: Spectator<BookListComponent>;
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  const createComponent = createComponentFactory(BookListComponent);

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
