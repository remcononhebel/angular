import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ExampleService } from '../service/example.service';

@Component({
  selector: 'testing-demo-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  readonly serviceValue$ = new Subject<number>();

  constructor(readonly exampleService: ExampleService) {}

  getValue(): void {
    const value = this.exampleService.getValue();

    this.serviceValue$.next(value);
  }

  selectRandomFruit(): void {
    this.exampleService.selectRandomFruit();
  }
}
