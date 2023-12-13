import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { availableFruits, ExampleService } from './example.service';

describe('ExampleService', () => {
  let spectator: SpectatorService<ExampleService>;
  let service: ExampleService;
  const createService = createServiceFactory({
    service: ExampleService,
    mocks: [],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return 42 when getValue is called', () => {
    expect(service.getValue()).toEqual(42);
  });

  it('should emit a fruit from the fruits array', (done: jest.DoneCallback) => {
    service.selectedFruit$.subscribe((fruit: string) => {
      expect(availableFruits).toContain(fruit);
      done();
    });

    service.selectRandomFruit();
  });
});
