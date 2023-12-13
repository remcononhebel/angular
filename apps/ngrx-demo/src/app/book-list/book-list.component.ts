import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'ngrx-demo-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() add = new EventEmitter<string>();
}
