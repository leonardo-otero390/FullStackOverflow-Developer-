import { QuestionBody } from '../interfaces/interfaces';
import * as schemas from './schemas';

async function validateQuestionBody(
  questionBody: QuestionBody,
): Promise<boolean | Error> {
  const validation = schemas.questionBodySchema.validate(questionBody);
  if (validation.error) throw new Error('Bad request');
  return true;
}

export { validateQuestionBody };
