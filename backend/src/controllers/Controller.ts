import { Request, Response } from 'express';

export const getAttacks = async (req: Request, res: Response) => {
    res.render('dashboard', {});
  };

export const getLogin = async (req: Request, res: Response) => {
    res.render('loginpage', { error: req.query.error || '' });
  }