import connection from '../../src/database/connection';

export async function cleanDatabase() {
  await connection.query(`TRUNCATE questions RESTART IDENTITY`);
}

export async function endConnection() {
  await connection.end();
}
