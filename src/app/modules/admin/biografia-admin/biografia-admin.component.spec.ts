import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiografiaAdminComponent } from './biografia-admin.component';

describe('BiografiaAdminComponent', () => {
  let component: BiografiaAdminComponent;
  let fixture: ComponentFixture<BiografiaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiografiaAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiografiaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
