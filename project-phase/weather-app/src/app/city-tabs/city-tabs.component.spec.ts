import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTabsComponent } from './city-tabs.component';

describe('CityTabsComponent', () => {
  let component: CityTabsComponent;
  let fixture: ComponentFixture<CityTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
