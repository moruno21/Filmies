import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css'],
})
export class FilmsPageComponent implements OnInit {
  films: any = [];

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((data: any) => {
      this.films = data;
    });
  }
}
