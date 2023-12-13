import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { first } from 'rxjs';
import { ExampleServiceJestMock } from '../service/example.service.jest-mock';
import { ExampleComponent } from './example.component';

describe('ExampleComponent', () => {
  let spectator: Spectator<ExampleComponent>;
  let component: ExampleComponent;

  const createComponent = createComponentFactory({
    component: ExampleComponent,
    providers: [ExampleServiceJestMock.provide()],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getValue', () => {
    it('should not render a result by default', () => {
      expect(spectator.query('[data-testid="result"]')).toBeFalsy();
    });

    it('should call ExampleService.getValue() when button is clicked', () => {
      const exampleService = ExampleServiceJestMock.inject(spectator);
      const spy = jest.spyOn(exampleService, 'getValue');

      spectator.click('[data-testid="button"]');

      expect(spy).toHaveBeenCalled();
    });

    it('should get a value from the ExampleService when getValue is called', (done: jest.DoneCallback) => {
      const mockValue = 17;

      const exampleService = ExampleServiceJestMock.inject(spectator);
      exampleService.getValue.mockImplementation(() => {
        console.warn('ExampleServiceJestMock.getValue called!');
        return mockValue;
      });

      component.serviceValue$.pipe(first()).subscribe((value: number) => {
        expect(value).toEqual(mockValue);
        done();
      });

      component.getValue();
    });
  });

  describe('selectedFruit', () => {
    it('should not render a selected fruit by default', () => {
      expect(spectator.query('[data-testid="selected-fruit"]')).toBeFalsy();
    });

    it('should not render a selected fruit by default (snapshot)', () => {
      expect(spectator.fixture).toMatchSnapshot();
    });

    it('should call the ExampleService.selectRandomFruit when selectRandomFruit is called', () => {
      const exampleService = ExampleServiceJestMock.inject(spectator);
      const spy = jest.spyOn(exampleService, 'selectRandomFruit');

      component.selectRandomFruit();

      expect(spy).toHaveBeenCalled();
    });

    it('should render a fruit when selectedFruit$ is emitted by the ExampleService', (done: jest.DoneCallback) => {
      const exampleService = ExampleServiceJestMock.inject(spectator);

      exampleService.selectedFruit$.pipe(first()).subscribe(() => {
        spectator.detectChanges();
        expect(spectator.query('[data-testid="selected-fruit"]')).toBeTruthy();

        done();
      });

      exampleService.selectedFruit$.next('mock fruit');
    });

    it('should render a fruit when selectedFruit$ is emitted by the ExampleService (snapshot)', (done: jest.DoneCallback) => {
      const exampleService = ExampleServiceJestMock.inject(spectator);

      exampleService.selectedFruit$.pipe(first()).subscribe(() => {
        spectator.detectChanges();
        expect(spectator.fixture).toMatchSnapshot();

        done();
      });

      exampleService.selectedFruit$.next('mock fruit');
    });
  });
});
