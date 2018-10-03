import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportingFacilityComponent } from './sporting-facility.component';

describe('SportingFacilityComponent', () => {
  let component: SportingFacilityComponent;
  let fixture: ComponentFixture<SportingFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportingFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportingFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
