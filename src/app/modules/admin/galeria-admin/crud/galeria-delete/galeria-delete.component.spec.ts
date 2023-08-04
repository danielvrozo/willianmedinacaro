import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaDeleteComponent } from './galeria-delete.component';

describe('GaleriaDeleteComponent', () => {
  let component: GaleriaDeleteComponent;
  let fixture: ComponentFixture<GaleriaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
