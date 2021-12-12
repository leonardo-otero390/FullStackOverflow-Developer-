import express from 'express';
import routes from './routes/routes';
import questionsRoutes from './routes/questions.routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use('/questions', questionsRoutes);
export default app;
