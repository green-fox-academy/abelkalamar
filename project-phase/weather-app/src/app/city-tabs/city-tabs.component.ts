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
  today: Date = new Date();
  tomorrow =  new Date(this.today.setDate(this.today.getDate() + 1));

  constructor(private forecastService: ForecastService) { }
  
  ngOnInit() {
    this.getForecasts(`${environment.apiUrl}find?q=Budapest&units=metric&appid=87a18d3268182e405a21962bd663e357`);
  }

  searchForecast(city) {
    this.searchUrl = `${environment.apiUrl}find?q=${city}&units=metric&appid=87a18d3268182e405a21962bd663e357`;
    this.getForecasts(this.searchUrl);
  }

  getDate(date) {
    console.log(date);
  }

  chooseImg(resImg) {
    switch (resImg) {
      case 'Clear':
        return 'sunny';
      case 'Rain' || 'Drizzle':
        return 'rainy';
      case 'Snow':
        return 'snowy';
      default:
        return 'cloudy';
    }
  }

  getForecasts(url): void {
    this.forecasts = [];
    this.forecastService.getForecast(url)
      .subscribe(content => {
        const data = content.list;
        console.log(content);
        data.forEach(result => {
          const newForecast: Weather = {
            cityId: result.id,
            city: result.name,
            location: result.sys.country,
            weather: {
              temp: result.main.temp,
              icon: this.chooseImg(result.weather[0].main),
              message: result.weather[0].description
            }
          }
          this.forecasts.push(newForecast);
        });
      });
  }
}


