import { TestBed } from '@angular/core/testing';

import { BannerGetService } from './banner-get.service';

describe('BannerGetService', () => {
  let service: BannerGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
