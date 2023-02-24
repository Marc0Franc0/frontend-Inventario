import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesCategoriasComponent } from './botones-categorias.component';

describe('BotonesCategoriasComponent', () => {
  let component: BotonesCategoriasComponent;
  let fixture: ComponentFixture<BotonesCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesCategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
