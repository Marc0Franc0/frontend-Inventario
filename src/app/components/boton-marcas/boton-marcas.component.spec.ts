import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonMarcasComponent } from './boton-marcas.component';

describe('BotonMarcasComponent', () => {
  let component: BotonMarcasComponent;
  let fixture: ComponentFixture<BotonMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonMarcasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
