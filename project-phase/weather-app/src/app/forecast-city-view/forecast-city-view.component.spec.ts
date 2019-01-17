import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCityViewComponent } from './forecast-city-view.component';

describe('ForecastCityViewComponent', () => {
  let component: ForecastCityViewComponent;
  let fixture: ComponentFixture<ForecastCityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastCityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
