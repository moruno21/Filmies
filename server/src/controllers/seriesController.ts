import { Request, Response } from 'express';
import pool from '../database';

class SeriesController {
  public async listSeries(req: Request, res: Response): Promise<void> {
    await pool.query('SELECT * FROM series', (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  }
  public async getSeries(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('SELECT * FROM series WHERE id = ?', [id], (err, result, fields) => {
      if (err) throw err;
      if (result.length > 0) return res.json(result);
      res.status(404).json({ text: 'Series doesnt exists' });
    });
  }
  public async postSeries(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO series SET ?', [req.body]);
    res.json({ text: 'Created series' });
  }
  public async deleteSeries(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM series WHERE id = ?', [id]);
    res.json({ text: 'Deleted series' });
  }
  public async updateSeries(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE series SET ? WHERE id = ?', [req.body, id]);
    res.json({ text: 'Updated series' });
  }
}

export const seriesController = new SeriesController();
