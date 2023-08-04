import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaGetComponent } from './galeria-get.component';

describe('GaleriaGetComponent', () => {
  let component: GaleriaGetComponent;
  let fixture: ComponentFixture<GaleriaGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
