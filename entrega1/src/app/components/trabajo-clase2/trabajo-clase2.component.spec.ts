import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoClase2Component } from './trabajo-clase2.component';

describe('TrabajoClase2Component', () => {
  let component: TrabajoClase2Component;
  let fixture: ComponentFixture<TrabajoClase2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoClase2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoClase2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
