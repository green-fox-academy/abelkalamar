import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityTabsComponent } from './city-tabs/city-tabs.component';
import { ForecastDetailedComponent } from './forecast-detailed/forecast-detailed.component';
import { ForecastCityViewComponent } from './forecast-city-view/forecast-city-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CityTabsComponent,
    ForecastDetailedComponent,
    ForecastCityViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
