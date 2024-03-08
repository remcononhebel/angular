import { Component } from '@angular/core';
import { JoystickPocComponent } from './gamepad-poc/gamepad-poc.component';

export interface JoystickViewModel {}

@Component({
  standalone: true,
  imports: [JoystickPocComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
