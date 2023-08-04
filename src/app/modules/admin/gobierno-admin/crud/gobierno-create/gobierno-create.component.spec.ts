import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoCreateComponent } from './gobierno-create.component';

describe('GobiernoCreateComponent', () => {
  let component: GobiernoCreateComponent;
  let fixture: ComponentFixture<GobiernoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
