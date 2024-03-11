import { ComponentFixture } from '@angular/core/testing';
import { SpectatorHost, createHostFactory } from '@ngneat/spectator';
import nipplejs, { JoystickOutputData } from 'nipplejs';
import { JoystickComponent } from './joystick.component';

jest.mock('nipplejs', () => {
  return {
    create: jest.fn().mockReturnValue({
      on: (_: string, callback: (evt: nipplejs.EventData, data: nipplejs.JoystickOutputData) => void) =>
        callback({} as nipplejs.EventData, {} as JoystickOutputData),
    }),
  };
});

describe('JoystickComponent', () => {
  let spectator: SpectatorHost<JoystickComponent>;
  let component: JoystickComponent;
  let fixture: ComponentFixture<JoystickComponent>;
  const createHost = createHostFactory({ component: JoystickComponent, imports: [] });

  const mockJoystickId = 'mockJoystickId';

  beforeEach(() => {
    spectator = createHost(`<app-joystick [joystickId]="'${mockJoystickId}'" [options]="{}"></app-joystick>`);
    component = spectator.component;
    fixture = spectator.fixture;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a joystick', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('getJoystickElement', () => {
    it('should return undefined if element cannot be found', () => {
      expect(component.getJoystickElement('does not exist')).toBeFalsy();
    });

    it('should return undefined if element cannot be found', () => {
      expect(component.getJoystickElement(mockJoystickId)).toBeTruthy();
    });
  });
});
