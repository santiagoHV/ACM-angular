import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarvelComponent } from './home-marvel.component';

describe('HomeMarvelComponent', () => {
  let component: HomeMarvelComponent;
  let fixture: ComponentFixture<HomeMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
