import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../../model/book.model';

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: Book[] }>(),
  },
});
