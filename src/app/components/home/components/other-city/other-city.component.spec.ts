import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCityComponent } from './other-city.component';

describe('OtherCityComponent', () => {
  let component: OtherCityComponent;
  let fixture: ComponentFixture<OtherCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
