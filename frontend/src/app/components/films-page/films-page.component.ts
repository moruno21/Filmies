import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
})
export class FilmsPageComponent implements OnInit {
  films: any = [];

  constructor(private filmsService: FilmsService, private router: Router) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmsService.getFilms().subscribe(
      (res) => {
        this.films = res;
      },
      (err) => console.error(err)
    );
  }
  deleteFilm(filmId: any) {
    this.filmsService.deleteFilm(filmId).subscribe(
      (res) => {
        this.getFilms();
      },
      (err) => console.log(err)
    );
  }

  editFilm(filmId: any) {
    this.router.navigate([`/films/edit/${filmId}`]);
  }
}
