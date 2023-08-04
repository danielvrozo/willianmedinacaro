import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoUpdateComponent } from './gobierno-update.component';

describe('GobiernoUpdateComponent', () => {
  let component: GobiernoUpdateComponent;
  let fixture: ComponentFixture<GobiernoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
