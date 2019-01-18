import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  city: string;

  constructor(private http: HttpClient) { }

  getForecast(url): Observable<any> {
    return this.http.get<any>(url);
  }
}
