import { TestBed } from '@angular/core/testing';

import { BannerUpService } from './banner-up.service';

describe('BannerUpService', () => {
  let service: BannerUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
