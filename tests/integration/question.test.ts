import '../../src/setup';
import supertest from 'supertest';
import app from '../../src/app';
import { QuestionBody } from '../factories/questionFactory';
import * as database from '../utils/database';
import { AnswerBody } from '../factories/answerFactory';
import { UserBody } from '../factories/userFactory';

afterAll(async () => {
  await database.cleanDatabase();
  await database.endConnection();
});
const agent = supertest(app);
describe('POST /questions', () => {
  beforeEach(database.cleanDatabase);
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

describe('GET /questions/:id', () => {
  let questionId: any;
  beforeAll(async () => {
    const body = new QuestionBody();
    questionId = await database.createQuestion(body);
  });
  afterEach(async () => {
    const user = new UserBody();
    const userId = await database.createUser(user);
    const body = new AnswerBody(userId);
    await database.answerQuestion(body, questionId);
  });
  it('get NOT answered question and status 200', async () => {
    const response = await agent.get(`/questions/${questionId}`);
    expect(response.status).toBe(200);
    expect(response.body.answered).toBe(false);
  });
  it('get answered question and status 200', async () => {
    const response = await agent.get(`/questions/${questionId}`);
    expect(response.status).toBe(200);
    expect(response.body.answered).toBe(true);
  });
  it('should return status 400 for invalid route params', async () => {
    const response = await agent.get('/questions/3d');
    expect(response.status).toBe(400);
  });
  it('should return status 404 for unexistent question', async () => {
    const response = await agent.get('/questions/3432');
    expect(response.status).toBe(404);
  });
});
