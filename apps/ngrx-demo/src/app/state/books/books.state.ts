import { Book } from '../../model/book.model';

export interface BooksState {
  books: Book[];
  error: string | null;
}
