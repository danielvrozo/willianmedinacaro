import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEditarComponent } from './crud-editar.component';

describe('CrudEditarComponent', () => {
  let component: CrudEditarComponent;
  let fixture: ComponentFixture<CrudEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
