import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoDeleteComponent } from './gobierno-delete.component';

describe('GobiernoDeleteComponent', () => {
  let component: GobiernoDeleteComponent;
  let fixture: ComponentFixture<GobiernoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
