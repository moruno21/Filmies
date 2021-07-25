import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  api_link = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getOneSeries(id: string): Observable<Series> {
    return this.http.get(`${this.api_link}/series/${id}`);
  }

  getSeries(): Observable<Series> {
    return this.http.get(`${this.api_link}/series`);
  }

  postSeries(series: Series): Observable<Series> {
    return this.http.post(`${this.api_link}/series`, series);
  }

  deleteSeries(id: string): Observable<Series> {
    return this.http.delete(`${this.api_link}/series/${id}`);
  }

  updateSeries(id: string, series: Series): Observable<Series> {
    return this.http.put(`${this.api_link}/series/${id}`, series);
  }
}
