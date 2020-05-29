import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDcComponent } from './home-dc.component';

describe('HomeDcComponent', () => {
  let component: HomeDcComponent;
  let fixture: ComponentFixture<HomeDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
