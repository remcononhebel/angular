import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from "rxjs";
import { BooksApiService } from "../../service/books-api.service";

@Injectable()
export class BooksEffects {
    loadBooks$ = createEffect(() => this.actions$.pipe(
        ofType('[Books Page] Load Book List'),
        exhaustMap(() => this.booksApiService.getBooks()
            .pipe(
                map(books => ({ type: '[Books API] Load Book List Successful', books })),
                catchError((error) => of({type: '[Books API] Load Book List Failed', error: 'Failed to load books: ' + error.message}))
            )
        )
    ))


    constructor(private readonly actions$: Actions, private readonly booksApiService: BooksApiService) { }
}