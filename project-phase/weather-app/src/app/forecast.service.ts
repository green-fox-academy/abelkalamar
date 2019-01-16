import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { FORECASTS } from './mock-weather';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  url = environment.apiUrl;
  city: string;

  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    return this.http.get<Weather[]>(this.url);
  }
}
