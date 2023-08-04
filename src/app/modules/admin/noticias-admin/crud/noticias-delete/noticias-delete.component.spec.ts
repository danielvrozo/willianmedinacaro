import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDeleteComponent } from './noticias-delete.component';

describe('NoticiasDeleteComponent', () => {
  let component: NoticiasDeleteComponent;
  let fixture: ComponentFixture<NoticiasDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
