import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import nipplejs from 'nipplejs';
import { Subject, map } from 'rxjs';
import { JoystickComponent } from '../joystick/joystick.component';

export interface JoystickViewModel {
  direction: nipplejs.Direction;
}

@Component({
  selector: 'app-gamepad-poc',
  standalone: true,
  imports: [CommonModule, JoystickComponent],
  templateUrl: './gamepad-poc.component.html',
  styleUrl: './gamepad-poc.component.scss',
})
export class GamepadPocComponent {
  readonly leftJoystickOutputData$ = new Subject<nipplejs.JoystickOutputData>();
  readonly rightJoystickOutputData$ = new Subject<nipplejs.JoystickOutputData>();

  readonly left$ = this.leftJoystickOutputData$.pipe(map((data) => this.mapToViewModel(data)));
  readonly right$ = this.rightJoystickOutputData$.pipe(map((data) => this.mapToViewModel(data)));

  leftJoystickManager?: nipplejs.JoystickManager;
  rightJoystickManager?: nipplejs.JoystickManager;

  readonly leftJoystickOptions: nipplejs.JoystickManagerOptions = {
    mode: 'static',
    position: { left: '100px', bottom: '100px' },
    color: 'red',
  };

  readonly rightJoystickManagerOptions: nipplejs.JoystickManagerOptions = {
    mode: 'static',
    position: { left: '100px', bottom: '100px' },
    color: 'blue',
  };

  onLeftJoystickMove(event: nipplejs.JoystickOutputData) {
    this.leftJoystickOutputData$.next(event);
  }

  onRightJoystickMove(event: nipplejs.JoystickOutputData) {
    this.rightJoystickOutputData$.next(event);
  }

  private mapToViewModel(data: nipplejs.JoystickOutputData): JoystickViewModel | null {
    return { direction: data.direction };
  }
}
