import { TestBed } from '@angular/core/testing';

import { AllGobiernoService } from './all-gobierno.service';

describe('AllGobiernoService', () => {
  let service: AllGobiernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllGobiernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
