import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { MockModule } from 'ng-mocks';
import { ExampleModule } from './example/example.module';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;

  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [MockModule(ExampleModule)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render an testing-demo-example', () => {
    expect(spectator.query('testing-demo-example')).toBeTruthy();
  });
});
