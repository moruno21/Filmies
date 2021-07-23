import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film: Film = {};
  @Input() index: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
