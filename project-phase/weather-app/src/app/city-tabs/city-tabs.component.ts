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

  forecasts: Weather[];

  weather: Weather = {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 19, icon: 'partly_cloudy', message: 'So far so good.' },
    ],
  }

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts(): void {
    this.forecastService.getForecast()
      .subscribe(content => {
        console.log(content.list[0]);
        // content.forEach(e => {
        //   const weather = {
        //     city: e.name,
        //     location: 
        //   }
        // });
      });
  }
}


