import { Request, Response } from 'express';

class FilmsController {
  public films(req: Request, res: Response) {
    res.send('This is the film page');
  }
}

export const filmsController = new FilmsController();
