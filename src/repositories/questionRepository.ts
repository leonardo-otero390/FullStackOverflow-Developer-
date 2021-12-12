import connection from '../database/connection';
import { Question } from '../interfaces/interfaces';

export async function insert(
  student: string,
  question: string,
  tags: string,
  className: string,
): Promise<number | null> {
  const result = await connection.query(
    `INSERT INTO questions
    (student, question, tags, class)
    VALUES
    ($1, $2, $3, $4)
    RETURNING id;`,
    [student, question, tags, className],
  );
  if (!result.rowCount) return null;
  return result.rows[0].id;
}

export async function find(id: number): Promise<Question | null> {
  const result = await connection.query(
    'SELECT * FROM questions WHERE id = $1;',
    [id],
  );
  if (!result.rowCount) return null;
  return result.rows[0];
}
