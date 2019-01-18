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

  forecasts: any = [];
  searchUrl: string = '';
  searchDate: number = this.getCurrentDay();
  // currentDate = this.forecasts.weather[0].date;

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

  isLeftDisabled(): boolean {
    return this.searchDate === this.getCurrentDay();
  }

  isRightDisabled(): boolean {
    return this.searchDate === this.getCurrentDay() + 5;
  }

  getCurrentDay(): number {
    const now = new Date();
    return +now.toString().split(' ')[2];
  }

  nextDayForecasts(): void {
    if (this.searchDate !== this.getCurrentDay() + 5) {
      this.searchDate++;
      this.getForecasts(this.searchUrl, this.searchDate);
    }
  }

  previousDayForecasts(): void {
    if (this.searchDate !== this.getCurrentDay()) {
      this.searchDate--;
      this.getForecasts(this.searchUrl, this.searchDate);
    }
  }

  getForecasts(url: string, date = this.getCurrentDay()): void {
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
          if (e.dt_txt.includes(`2019-01-${date}`)) {
            newForecast.weather.push({
              temp: +e.main.temp,
              icon: this.chooseImg(e.weather[0].main),
              message: e.weather[0].description,
              time: e.dt_txt.slice(11, 16),
              date: e.dt_txt.slice(5, 10)
            });
          }
        });
        this.forecasts = newForecast;
        console.log(this.forecasts);
      });
  }

  previousPage(): void {
    this.location.back();
  }

}
