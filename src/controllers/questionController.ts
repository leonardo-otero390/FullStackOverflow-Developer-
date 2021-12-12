import { Request, Response } from 'express';
import { httpStatusCode } from '../enum/httpStatus';
import { QuestionBody } from '../interfaces/interfaces';
import * as questionValidation from '../validations/questionValidation';
import * as questionService from '../services/questionService';

export async function postQuestion(req: Request, res: Response) {
  const question: QuestionBody = req.body;
  try {
    await questionValidation.validateQuestionBody(question);
    const questionId = await questionService.createQuestion(question);
    return res.status(httpStatusCode.OK).send({ id: questionId });
  } catch (error) {
    if (error.message === 'Bad request') {
      return res.sendStatus(httpStatusCode.BAD_REQUEST);
    }
    return res.sendStatus(httpStatusCode.INTERNAL_SERVER_ERROR);
  }
}
