import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDestacadasComponent } from './noticias-destacadas.component';

describe('NoticiasDestacadasComponent', () => {
  let component: NoticiasDestacadasComponent;
  let fixture: ComponentFixture<NoticiasDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasDestacadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
