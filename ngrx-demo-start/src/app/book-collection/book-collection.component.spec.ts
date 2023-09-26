import { ComponentFixture } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { BookCollectionComponent } from './book-collection.component';

describe('BookCollectionComponent', () => {
  let spectator: Spectator<BookCollectionComponent>;
  let component: BookCollectionComponent;
  let fixture: ComponentFixture<BookCollectionComponent>;
  const createComponent = createComponentFactory(BookCollectionComponent);

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
