import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../../model/book.model';
import { selectBooksState, selectNumberOfAvailableBooks } from '../books/books.selectors';
import { CollectionState } from './collection.state';

export const selectCollectionState = createFeatureSelector<CollectionState>('collection');

export const selectBookCollection = createSelector(selectBooksState, selectCollectionState, (booksState, collectionState) => {
  return collectionState.books.map((id) => booksState.books.find((book) => book.id === id)!);
});

export const selectNumberOfBooksInCollection = createSelector(
  selectNumberOfAvailableBooks,
  selectBookCollection,
  (numberOfAvailableBooks: number, booksInCollection: Book[]) => {
    if (booksInCollection.length === 0) {
      return 'No books selected';
    }

    if (booksInCollection.length === numberOfAvailableBooks) {
      return 'All available books selected';
    }
    return `${booksInCollection.length} / ${numberOfAvailableBooks} books selected`;
  }
);
