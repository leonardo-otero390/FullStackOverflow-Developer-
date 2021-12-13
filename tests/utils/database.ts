/* eslint-disable camelcase */
import connection from '../../src/database/connection';
import { Question, Answer, User } from '../../src/interfaces/interfaces';

export async function createQuestion(questionBody: Question): Promise<number> {
  const { student, question, tags } = questionBody;
  const className = questionBody.class;
  let result;
  try {
    result = await connection.query(
      `INSERT INTO questions
      (student, question, tags, class)
      VALUES
      ($1, $2, $3, $4)
      RETURNING id;
      `,
      [student, question, tags, className],
    );
  } catch (err) {
    console.log(err.message);
  }
  return result.rows[0].id;
}
export async function answerQuestion(answerBody: Answer, id: number) {
  const { answer, answerner_id } = answerBody;
  try {
    await connection.query(
      `
    UPDATE questions 
    set answered=true, "answeredAt"=NOW(), answer=$1, answerner_id=$2
    WHERE id=$3;
    `,
      [answer, answerner_id, id],
    );
  } catch (err) {
    console.log(err.message);
  }
}
export async function createUser(userBody: User): Promise<number> {
  const { name, className, token } = userBody;
  let result;
  try {
    result = await connection.query(
      `
    INSERT INTO users 
    (name,class,token) VALUES
    ($1 , $2, $3)
    RETURNING id;
    `,
      [name, className, token],
    );
  } catch (err) {
    console.log(err.message);
  }
  return result.rows[0].id;
}
export async function cleanDatabase() {
  await connection.query(`TRUNCATE questions,users RESTART IDENTITY`);
}

export async function endConnection() {
  await connection.end();
}
