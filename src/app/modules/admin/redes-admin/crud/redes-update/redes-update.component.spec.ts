import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesUpdateComponent } from './redes-update.component';

describe('RedesUpdateComponent', () => {
  let component: RedesUpdateComponent;
  let fixture: ComponentFixture<RedesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
