import { Router } from 'express';
import { postQuestion } from '../controllers/questionController';

const routes = Router();

routes.post('/', postQuestion);

export default routes;
