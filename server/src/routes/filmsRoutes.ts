import { Router } from 'express';
import { filmsController } from '../controllers/filmsController';

class FilmsRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', filmsController.films);
  }
}

const filmsRoutes = new FilmsRoutes();
export default filmsRoutes.router;
