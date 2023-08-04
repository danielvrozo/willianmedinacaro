import { TestBed } from '@angular/core/testing';

import { AllVideoService } from './all-video.service';

describe('AllVideoService', () => {
  let service: AllVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
