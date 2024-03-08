import { ComponentFixture } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import nipplejs from 'nipplejs';
import { JoystickComponent } from '../joystick/joystick.component';
import { JoystickPocComponent } from './gamepad-poc.component';

const mockJoystickOutputData: nipplejs.JoystickOutputData = {
  direction: {
    angle: 'up',
    x: 'left',
    y: 'up',
  },
} as nipplejs.JoystickOutputData;

describe('JoystickPocComponent', () => {
  let spectator: Spectator<JoystickPocComponent>;
  let component: JoystickPocComponent;
  let fixture: ComponentFixture<JoystickPocComponent>;

  const createComponent = createComponentFactory({
    component: JoystickPocComponent,
    imports: [MockComponent(JoystickComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render two joysticks and two debug info divs', () => {
    expect(fixture).toMatchSnapshot();
  });

  describe('onLeftJoystickMove', () => {
    it('should emit leftJoystickOutputData$', (done: jest.DoneCallback) => {
      component.leftJoystickOutputData$.subscribe((data: nipplejs.JoystickOutputData) => {
        expect(data).toEqual(mockJoystickOutputData);
        done();
      });

      component.onLeftJoystickMove(mockJoystickOutputData);
    });
  });

  describe('onRightJoystickMove', () => {
    it('should emit rightJoystickOutputData$', (done: jest.DoneCallback) => {
      component.rightJoystickOutputData$.subscribe((data: nipplejs.JoystickOutputData) => {
        expect(data).toEqual(mockJoystickOutputData);
        done();
      });

      component.onRightJoystickMove(mockJoystickOutputData);
    });
  });

  it('should have the correct input value for the child component', () => {
    const child = spectator.query(JoystickComponent);
    expect(child).toBeTruthy();
    if (child) {
      child.joystickId = 'yes';
      spectator.detectChanges();
      expect(fixture).toMatchSnapshot();
    } else {
      fail();
    }
  });
});
