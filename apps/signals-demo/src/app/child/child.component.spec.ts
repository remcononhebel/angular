import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let spectator: Spectator<ChildComponent>;
  const createComponent = createComponentFactory(ChildComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render labels and inputs', () => {
    expect(spectator.fixture).toMatchSnapshot();
  });
});
