import { Request, Response } from 'express';

class IndexController {
  public index(req: Request, res: Response) {
    res.send('This is the home page');
  }
}

export const indexController = new IndexController();
