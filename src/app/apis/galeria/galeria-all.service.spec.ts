import { TestBed } from '@angular/core/testing';

import { GaleriaAllService } from './galeria-all.service';

describe('GaleriaAllService', () => {
  let service: GaleriaAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleriaAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
