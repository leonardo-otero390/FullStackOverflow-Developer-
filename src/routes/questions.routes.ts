import { Router } from 'express';
import * as questionController from '../controllers/questionController';
import validateToken from '../middlewares/validateToken';

const routes = Router();

routes.post('/', questionController.post);
routes.get('/:id', questionController.get);
routes.post('/:id',validateToken,questionController.answer);
export default routes;
