import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../../model/book.model';

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
    'Select books': props<{ bookIds: string[] }>()
  },
});

