import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from './model/book.model';
import { selectAvailableBooks, selectNumberOfAvailableBooks } from './state/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo-start';
  books$: Observable<Book[]>;
  numberOfAvailableBooks$: Observable<number>;

  constructor(private readonly store: Store) {
    this.books$ = this.store.select(selectAvailableBooks);
    this.numberOfAvailableBooks$ = this.store.select(selectNumberOfAvailableBooks);
  }

  onAdd(id: string) {
    alert(`TODO: boek met id ${id} toevoegen aan collection`);
  }
}
