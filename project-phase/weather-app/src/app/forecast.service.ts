import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
