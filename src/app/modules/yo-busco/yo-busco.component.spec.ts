import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoBuscoComponent } from './yo-busco.component';

describe('YoBuscoComponent', () => {
  let component: YoBuscoComponent;
  let fixture: ComponentFixture<YoBuscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoBuscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoBuscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
