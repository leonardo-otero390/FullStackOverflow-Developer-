import { Request, Response, NextFunction } from 'express';
import { validate as uuidValidate } from 'uuid';
import connection from '../database/connection';

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { authorization } = req.headers;

  if (
    !authorization ||
    authorization.trim() === '' ||
    !authorization.includes('Bearer ')
  )
    return res.sendStatus(400);

  const token = authorization.replace('Bearer ', '');

  if (token.trim() === '') return res.sendStatus(422);
  if (!uuidValidate(token)) return res.sendStatus(400);
  let userResearch;
  try {
    userResearch = await connection.query(
      'SELECT * FROM users WHERE token = $1;',
      [token],
    );
    if (!userResearch.rowCount) return res.sendStatus(404);
  } catch (error) {
    console.log('FAIL in validateToken');
    console.log(error);
    return res.sendStatus(500);
  }
  res.locals.user = userResearch.rows[0];
  next();
}
