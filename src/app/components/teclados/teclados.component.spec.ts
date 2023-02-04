import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecladosComponent } from './teclados.component';

describe('TecladosComponent', () => {
  let component: TecladosComponent;
  let fixture: ComponentFixture<TecladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
