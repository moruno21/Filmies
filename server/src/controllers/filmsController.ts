import { json, Request, Response } from 'express';
import pool from '../database';

class FilmsController {
  public async listFilms(req: Request, res: Response): Promise<void> {
    await pool.query('SELECT * FROM films', (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getFilm(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('SELECT * FROM films WHERE id = ?', [id], (err, result, fields) => {
      if (err) throw err;
      if (result.length > 0) return res.json(result[0]);
      res.status(404).json({ text: 'Film doesnt exist' });
    });
  }

  public async postFilm(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO films SET ?', [req.body]);
    res.json({ text: 'Created film' });
  }

  public async deleteFilm(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM films WHERE id = ?', [id]);
    res.json({ text: 'Deleted film' });
  }

  public async updateFilm(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE films SET ? WHERE id = ?', [req.body, id]);
    res.json({ text: 'Updated film' });
  }
}

export const filmsController = new FilmsController();
