import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export const availableFruits = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Mango',
  'Strawberry',
];


@Injectable({
  providedIn: 'root',
})
export class ExampleService {

  readonly selectedFruit$ = new Subject<string>();

  getValue(): number {
    return 42;
  }

  selectRandomFruit(): void {
    const randomIndex = Math.floor(Math.random() * availableFruits.length);
    this.selectedFruit$.next(availableFruits[randomIndex]);
  }
}
