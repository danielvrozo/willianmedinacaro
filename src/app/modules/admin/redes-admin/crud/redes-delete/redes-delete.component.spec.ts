import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesDeleteComponent } from './redes-delete.component';

describe('RedesDeleteComponent', () => {
  let component: RedesDeleteComponent;
  let fixture: ComponentFixture<RedesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
