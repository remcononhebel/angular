import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/model/book.model';
import { CollectionState } from "../collection/collection.state";
import { BooksState } from "./books.state";

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectCollectionState = createFeatureSelector<
  CollectionState
>('collection');

export const selectAvailableBooks = createSelector(
  selectBooksState,
  (booksState: BooksState) => {
    return booksState.books
  }
)

export const selectBookCollection = createSelector(
  selectBooksState,
  selectCollectionState,
  (booksState, collectionState) => {
    return collectionState.books.map((id) => booksState.books.find((book) => book.id === id)!);
  }
);
