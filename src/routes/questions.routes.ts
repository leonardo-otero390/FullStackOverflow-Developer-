import { Router } from 'express';
import * as questionController from '../controllers/questionController';

const routes = Router();

routes.post('/', questionController.post);
routes.get('/:id', questionController.get);
export default routes;
