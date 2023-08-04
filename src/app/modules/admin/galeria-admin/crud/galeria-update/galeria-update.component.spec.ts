import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaUpdateComponent } from './galeria-update.component';

describe('GaleriaUpdateComponent', () => {
  let component: GaleriaUpdateComponent;
  let fixture: ComponentFixture<GaleriaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
