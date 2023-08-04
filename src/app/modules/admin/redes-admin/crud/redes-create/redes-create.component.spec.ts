import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesCreateComponent } from './redes-create.component';

describe('RedesCreateComponent', () => {
  let component: RedesCreateComponent;
  let fixture: ComponentFixture<RedesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
