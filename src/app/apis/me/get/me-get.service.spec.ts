import { TestBed } from '@angular/core/testing';

import { MeGetService } from './me-get.service';

describe('MeGetService', () => {
  let service: MeGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
