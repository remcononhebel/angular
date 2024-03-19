import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../../model/book.model';

export const BooksPageActions = createActionGroup({
  source: 'Books Page',
  events: {
    'Load Book List': emptyProps(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load Book List Successful': props<{ books: Book[] }>(),
    'Load Book List Failed': props<{ error: string }>(),
  },
});
