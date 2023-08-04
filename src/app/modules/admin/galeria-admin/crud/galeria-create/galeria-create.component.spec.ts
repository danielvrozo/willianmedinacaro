import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaCreateComponent } from './galeria-create.component';

describe('GaleriaCreateComponent', () => {
  let component: GaleriaCreateComponent;
  let fixture: ComponentFixture<GaleriaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
