import { TestBed } from '@angular/core/testing';

import { InfoAllService } from './info-all.service';

describe('InfoAllService', () => {
  let service: InfoAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
