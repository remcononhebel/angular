import { BooksState } from "../state/books/books.state";
import { CollectionState } from "../state/collection/collection.state";

export interface AppState {
  books: BooksState,
  collection: CollectionState,
}
