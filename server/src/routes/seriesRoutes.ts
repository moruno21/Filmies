import { Router } from 'express';
import { seriesController } from '../controllers/seriesController';

class SeriesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', seriesController.listSeries);
    this.router.get('/:id', seriesController.getSeries);
    this.router.post('/', seriesController.postSeries);
    this.router.delete('/:id', seriesController.deleteSeries);
    this.router.put('/:id', seriesController.updateSeries);
  }
}

const seriesRoutes = new SeriesRoutes();
export default seriesRoutes.router;
