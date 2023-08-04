import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeHrComponent } from './mensaje-hr.component';

describe('MensajeHrComponent', () => {
  let component: MensajeHrComponent;
  let fixture: ComponentFixture<MensajeHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeHrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
