import { Provider } from '@angular/core';
import { Spectator, SpectatorService } from '@ngneat/spectator';
import { of } from 'rxjs';
import { mockBooks } from '../mocks/book.mocks';
import { BooksApiService } from './books-api.service';

export class BooksApiServiceJestMock {
  getBooks = jest.fn().mockReturnValue(of({ items: [...mockBooks] }));

  static provide(): Provider {
    return { provide: BooksApiService, useClass: BooksApiServiceJestMock };
  }

  static inject(spectator: Spectator<unknown> | SpectatorService<unknown>): BooksApiServiceJestMock {
    return spectator.inject(BooksApiService) as unknown as BooksApiServiceJestMock;
  }
}
