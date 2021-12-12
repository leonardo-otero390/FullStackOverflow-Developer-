import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import { QuestionBody } from '../factories/questionFactory';
import { cleanDatabase, endConnection } from '../utils/database';

beforeEach(cleanDatabase);

afterAll(async () => {
  await cleanDatabase();
  await endConnection();
});
const agent = supertest(app);
describe('POST /questions', () => {
  it('create a question, returns 201 and id for valid params', async () => {
    const body = new QuestionBody();
    const response = await agent.post('/questions').send(body);
    expect(response.status).toBe(201);
    expect(response.body.id).toBe(1);
  });
  it('should return 400 for invalid params', async () => {
    const body = new QuestionBody();
    delete body.student;
    const response = await agent.post('/questions').send(body);
    expect(response.status).toBe(400);
  });
});
