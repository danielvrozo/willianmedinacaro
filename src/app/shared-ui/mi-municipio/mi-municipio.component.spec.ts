import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMunicipioComponent } from './mi-municipio.component';

describe('MiMunicipioComponent', () => {
  let component: MiMunicipioComponent;
  let fixture: ComponentFixture<MiMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
