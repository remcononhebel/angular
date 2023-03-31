import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { booksReducer } from './state/books/books.reducer';
import { collectionReducer } from './state/collection/collection.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule,
    StoreDevtoolsModule.instrument()
  ],
  declarations: [AppComponent, BookCollectionComponent, BookListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
