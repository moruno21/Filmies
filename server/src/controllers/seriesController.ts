import { Request, Response } from 'express';

class SeriesController {
  public series(req: Request, res: Response) {
    res.send('This is the series page');
  }
}

export const seriesController = new SeriesController();
