import { TestBed } from '@angular/core/testing';

import { ContactoAllService } from './contacto-all.service';

describe('ContactoAllService', () => {
  let service: ContactoAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactoAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
