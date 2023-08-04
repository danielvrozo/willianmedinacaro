import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBioComponent } from './editar-bio.component';

describe('EditarBioComponent', () => {
  let component: EditarBioComponent;
  let fixture: ComponentFixture<EditarBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
