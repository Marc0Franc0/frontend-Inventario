import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionBotonesComponent } from './creacion-botones.component';

describe('CreacionBotonesComponent', () => {
  let component: CreacionBotonesComponent;
  let fixture: ComponentFixture<CreacionBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
