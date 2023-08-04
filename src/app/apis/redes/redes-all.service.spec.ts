import { TestBed } from '@angular/core/testing';

import { RedesAllService } from './redes-all.service';

describe('RedesAllService', () => {
  let service: RedesAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedesAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
