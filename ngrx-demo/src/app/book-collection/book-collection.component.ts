import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../model/book.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: Book[] = [];
  @Output() remove = new EventEmitter<string>();
}
