import connection from '../database/connection';

export async function insertQuestion(
  questioner: string,
  question: string,
  tags: string,
): Promise<number | null> {
  const result = await connection.query(
    `INSERT INTO questions
    (questioner, question, tags)
    VALUES
    ($1, $2, $3)
    RETURNING id`,
    [questioner, question, tags],
  );
  if (!result.rowCount) return null;
  return result.rows[0].id;
}
