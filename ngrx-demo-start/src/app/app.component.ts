import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './model/app-state.model';
import { Book } from './model/book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngrx-demo-start';
  books$: Observable<Book[]>;
  numberOfAvailableBooks$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.books$ = this.store.select((state: AppState) => state.books.books);
    this.numberOfAvailableBooks$ = this.store.select((state: AppState) => state.books.books.length);
  }

  onAdd(id: string) {
    alert(`TODO: boek met id ${id} toevoegen aan collection`);
  }
}
