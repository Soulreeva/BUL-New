import { TestBed } from '@angular/core/testing';

import { BreachesService } from './breaches.service';

describe('BreachesService', () => {
  let service: BreachesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
