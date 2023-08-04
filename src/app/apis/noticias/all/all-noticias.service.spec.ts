import { TestBed } from '@angular/core/testing';

import { AllNoticiasService } from './all-noticias.service';

describe('AllNoticiasService', () => {
  let service: AllNoticiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllNoticiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
