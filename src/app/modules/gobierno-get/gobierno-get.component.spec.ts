import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoGetComponent } from './gobierno-get.component';

describe('GobiernoGetComponent', () => {
  let component: GobiernoGetComponent;
  let fixture: ComponentFixture<GobiernoGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
