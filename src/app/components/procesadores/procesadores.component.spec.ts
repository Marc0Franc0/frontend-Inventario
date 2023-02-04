import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesadoresComponent } from './procesadores.component';

describe('ProcesadoresComponent', () => {
  let component: ProcesadoresComponent;
  let fixture: ComponentFixture<ProcesadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcesadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
