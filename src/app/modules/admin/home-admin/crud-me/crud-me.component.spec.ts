import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMeComponent } from './crud-me.component';

describe('CrudMeComponent', () => {
  let component: CrudMeComponent;
  let fixture: ComponentFixture<CrudMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
