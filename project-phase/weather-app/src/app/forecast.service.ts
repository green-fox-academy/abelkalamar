import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { FORECASTS } from './mock-weather';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { CityTabsComponent } from './city-tabs/city-tabs.component';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  city: string;

  constructor(private http: HttpClient) { }

  getForecast(url): Observable<Weather[]> {
    return this.http.get<Weather[]>(url);
  }
}
