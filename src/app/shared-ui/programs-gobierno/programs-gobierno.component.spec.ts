import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsGobiernoComponent } from './programs-gobierno.component';

describe('ProgramsGobiernoComponent', () => {
  let component: ProgramsGobiernoComponent;
  let fixture: ComponentFixture<ProgramsGobiernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramsGobiernoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramsGobiernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
