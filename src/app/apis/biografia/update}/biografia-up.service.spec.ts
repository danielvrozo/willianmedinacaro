import { TestBed } from '@angular/core/testing';

import { BiografiaUpService } from './biografia-up.service';

describe('BiografiaUpService', () => {
  let service: BiografiaUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiografiaUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
