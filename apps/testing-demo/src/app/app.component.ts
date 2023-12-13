import { Component } from '@angular/core';
import { ExampleMapper } from './helper/example.mapper';

@Component({
  selector: 'testing-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'testing-demo';

  items = [
    ExampleMapper.map({ amount: 1, title: 'apple' }),
    ExampleMapper.map({ amount: 2, title: 'pear' }),
    ExampleMapper.map({ amount: 3, title: 'banana' }),
  ];
}
