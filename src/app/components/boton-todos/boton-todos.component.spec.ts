import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonTodosComponent } from './boton-todos.component';

describe('BotonTodosComponent', () => {
  let component: BotonTodosComponent;
  let fixture: ComponentFixture<BotonTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
