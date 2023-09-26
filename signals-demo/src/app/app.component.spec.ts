import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { AppComponent } from './app.component';
import { ChildModule } from './child/child.module';
import { MockModule } from 'ng-mocks';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [MockModule(ChildModule)]
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render labels and inputs', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
