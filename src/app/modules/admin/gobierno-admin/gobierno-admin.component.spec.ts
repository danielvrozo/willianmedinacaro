import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoAdminComponent } from './gobierno-admin.component';

describe('GobiernoAdminComponent', () => {
  let component: GobiernoAdminComponent;
  let fixture: ComponentFixture<GobiernoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GobiernoAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GobiernoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
