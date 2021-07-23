import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  api_link = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film> {
    return this.http.get(`${this.api_link}/films`);
  }

  getFilm(id: string): Observable<Film> {
    return this.http.get(`${this.api_link}/films/${id}`);
  }

  postFilm(film: Film): Observable<Film> {
    return this.http.post(`${this.api_link}/films`, film);
  }

  deleteFilm(id: string): Observable<Film> {
    return this.http.delete(`${this.api_link}/films/${id}`);
  }

  updateFilm(id: string, updatedFilm: Film): Observable<Film> {
    return this.http.put(`${this.api_link}/films/${id}`, updatedFilm);
  }
}
