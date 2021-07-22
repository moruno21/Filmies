import { Router } from 'express';
import { seriesController } from '../controllers/seriesController';

class SeriesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', seriesController.series);
  }
}

const seriesRoutes = new SeriesRoutes();
export default seriesRoutes.router;
