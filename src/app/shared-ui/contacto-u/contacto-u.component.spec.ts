import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoUComponent } from './contacto-u.component';

describe('ContactoUComponent', () => {
  let component: ContactoUComponent;
  let fixture: ComponentFixture<ContactoUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
