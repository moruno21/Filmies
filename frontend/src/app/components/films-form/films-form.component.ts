import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/film';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.css'],
})
export class FilmsFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  film: Film = {
    title: '',
    description: '',
    image: '',
  };

  update: boolean = false;
  done: boolean = false;
  error: boolean = false;

  constructor(
    private filmService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params; //Guarda los parametros pasados por la ruta
    if (params.id) {
      this.filmService.getFilm(params.id).subscribe(
        (res) => {
          this.film = res;
          this.update = true;
        },
        (err) => console.log(err)
      );
    }
  }

  postFilm() {
    delete this.film.id;
    if (this.film.title === '') {
      this.error = true;
    } else {
      this.error = false;
      this.filmService.postFilm(this.film).subscribe(
        (res) => {
          this.done = true;
        },
        (err) => console.log(err)
      );
    }
  }

  updateFilm(id: any, film: Film) {
    if (film.title === '') {
      this.error = true;
    } else {
      this.error = false;
      this.filmService.updateFilm(id, film).subscribe(
        (res) => {
          this.done = true;
        },
        (err) => console.log(err)
      );
    }
  }
}
