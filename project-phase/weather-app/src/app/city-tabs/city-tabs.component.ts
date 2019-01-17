import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { ForecastService } from '../forecast.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-city-tabs',
  templateUrl: './city-tabs.component.html',
  styleUrls: ['./city-tabs.component.css']
})
export class CityTabsComponent implements OnInit {

  forecasts: Weather[] = [];
  searchUrl: string = '';
  defaultCity: 'Budapest';

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.getForecasts(`${environment.apiUrl}find?q=Budapest&units=metric&appid=87a18d3268182e405a21962bd663e357`);
  }

  searchForecast(city) {
    this.searchUrl = `${environment.apiUrl}find?q=${city}&units=metric&appid=87a18d3268182e405a21962bd663e357`;
    this.getForecasts(this.searchUrl);
  }

  getForecasts(url): void {
    this.forecasts = [];
    this.forecastService.getForecast(url)
      .subscribe(content => {
        const data = content.list;
        console.log(data);
        data.forEach(result => {
          const newForecast: Weather = {
            city: result.name,
            location: result.sys.country,
            weather: []
          }
          result.weather.forEach(e => {
            newForecast.weather.push({ temp: result.main.temp, icon: e.main, message: e.description });
          });
          this.forecasts.push(newForecast);
        });
      });
  }
}


