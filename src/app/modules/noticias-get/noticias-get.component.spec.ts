import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasGetComponent } from './noticias-get.component';

describe('NoticiasGetComponent', () => {
  let component: NoticiasGetComponent;
  let fixture: ComponentFixture<NoticiasGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
