import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { mockBooks } from '../mocks/book.mocks';
import { BooksApiService } from './books-api.service';
import { of } from 'rxjs';

describe('BooksApiService', () => {
  let spectator: SpectatorService<BooksApiService>;
  let service: BooksApiService;
  const createService = createServiceFactory({
    service: BooksApiService,
    imports: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET on google books API', (done: jest.DoneCallback) => {
    const httpClient = spectator.inject(HttpClient);
    jest.spyOn(httpClient, 'get').mockReturnValue(of({ items: [...mockBooks] }));

    service.getBooks().subscribe((books) => {
      expect(books).toEqual(mockBooks);
      done();
    });
  });

  it('should return empty array is items is falsy', (done: jest.DoneCallback) => {
    const httpClient = spectator.inject(HttpClient);
    jest.spyOn(httpClient, 'get').mockReturnValue(of({ items: undefined }));

    service.getBooks().subscribe((books) => {
      expect(books).toEqual([]);
      done();
    });
  });
});
