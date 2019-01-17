import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { ForecastService } from '../forecast.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-forecast-detailed',
  templateUrl: './forecast-detailed.component.html',
  styleUrls: ['./forecast-detailed.component.css']
})
export class ForecastDetailedComponent implements OnInit {

  forecasts: Weather[] = [];
  searchUrl: string = '';
  now: Date = new Date();

  constructor(
    private forecastService: ForecastService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchUrl = `${environment.apiUrl}forecast?id=${id}&units=metric&appid=87a18d3268182e405a21962bd663e357`
    this.getForecasts(this.searchUrl);
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
        console.log(content);
        const newForecast = {
          cityId: +content.city.id,
          city: content.city.name,
          location: content.city.country,
          weather: []
        }
        content.list.forEach(e => {
          if (e.dt_txt.includes('2019-01-18')) {
            newForecast.weather.push({
              temp: +e.main.temp,
              icon: this.chooseImg(e.weather[0].main),
              message: e.weather[0].description,
              time: e.dt_txt.slice(11, 16)
            });
          }
        });
        // for (let i = 0; i < 5; i++) {
        //   newForecast.weather.push({
        //     temp: +content.list[i].main.temp,
        //     icon: this.chooseImg(content.list[i].weather[0].main),
        //     message: content.list[i].weather[0].description,
        //     time: content.list[i].dt_txt.slice(11, 16)
        //   });
        // }
        this.forecasts = newForecast;
        console.log(this.forecasts);
      });
  }

  previousPage() {
    this.location.back();
  }

}
