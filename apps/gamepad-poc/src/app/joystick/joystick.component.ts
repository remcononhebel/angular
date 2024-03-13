import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import nipplejs from 'nipplejs';

@Component({
  selector: 'app-joystick',
  standalone: true,
  imports: [],
  templateUrl: './joystick.component.html',
  styleUrl: './joystick.component.scss',
})
export class JoystickComponent implements AfterViewInit {
  @Input() joystickId!: string;
  @Input() options!: nipplejs.JoystickManagerOptions;

  @Output() move = new EventEmitter<nipplejs.JoystickOutputData>();

  private manager!: nipplejs.JoystickManager;

  ngAfterViewInit(): void {
    const options: nipplejs.JoystickManagerOptions = { ...this.options, zone: this.getJoystickElement(this.joystickId) };

    this.manager = nipplejs.create(options);
    this.manager.on('move', (_: unknown, data: nipplejs.JoystickOutputData) => {
      this.move.emit(data);
    });
  }

  getJoystickElement(joystickId: string): HTMLElement | undefined {
    return document.getElementById(joystickId) ?? undefined;
  }
}
