import { ComponentFixture } from '@angular/core/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { GamepadPocComponent } from './gamepad-poc/gamepad-poc.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    shallow: true,
    imports: [MockComponent(GamepadPocComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    fixture = spectator.fixture;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a header and the app-gamepad-poc component', () => {
    expect(fixture).toMatchSnapshot();
  });
});
