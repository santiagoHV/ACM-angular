import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajoClas2HeroeComponent } from './trabajo-clas2-heroe.component';

describe('TrabajoClas2HeroeComponent', () => {
  let component: TrabajoClas2HeroeComponent;
  let fixture: ComponentFixture<TrabajoClas2HeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajoClas2HeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajoClas2HeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
