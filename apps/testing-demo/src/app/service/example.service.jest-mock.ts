import { Provider } from '@angular/core';
import { Spectator } from '@ngneat/spectator';
import { ExampleService } from './example.service';
import { Subject } from 'rxjs';

type ExampleServiceInterface = Pick<ExampleService, keyof ExampleService>;

export class ExampleServiceJestMock implements ExampleServiceInterface {
  static readonly fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Grapes',
    'Mango',
    'Strawberry',
  ];

  selectedFruit$ = new Subject<string>();

  getValue = jest.fn();
  selectRandomFruit = jest.fn();

  static inject(spectator: Spectator<unknown>): ExampleServiceJestMock {
    return spectator.inject(
      ExampleService
    ) as ExampleServiceInterface as ExampleServiceJestMock;
  }

  static provide(): Provider {
    return { provide: ExampleService, useClass: ExampleServiceJestMock };
  }
}
