import { Router } from 'express';
import { filmsController } from '../controllers/filmsController';

class FilmsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', filmsController.listFilms);
    this.router.get('/:id', filmsController.getFilm);
    this.router.post('/', filmsController.postFilm);
    this.router.delete('/:id', filmsController.deleteFilm);
    this.router.put('/:id', filmsController.updateFilm);
  }
}

const filmsRoutes = new FilmsRoutes();
export default filmsRoutes.router;
