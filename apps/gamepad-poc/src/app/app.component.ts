import { Component } from '@angular/core';
import { GamepadPocComponent } from './gamepad-poc/gamepad-poc.component';

export interface JoystickViewModel {}

@Component({
  standalone: true,
  imports: [GamepadPocComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
