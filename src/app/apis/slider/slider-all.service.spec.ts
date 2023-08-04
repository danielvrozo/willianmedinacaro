import { TestBed } from '@angular/core/testing';

import { SliderAllService } from './slider-all.service';

describe('SliderAllService', () => {
  let service: SliderAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SliderAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
