import { Request, Response } from 'express';
import { httpStatusCode } from '../enum/httpStatus';
import { Question } from '../interfaces/interfaces';
import * as questionValidation from '../validations/questionValidation';
import * as questionService from '../services/questionService';

export async function post(req: Request, res: Response) {
  const question: Question = req.body;
  try {
    await questionValidation.validateQuestionBody(question);
    const questionId = await questionService.create(question);
    return res.status(httpStatusCode.CREATED).send({ id: questionId });
  } catch (error) {
    if (error.message === 'Bad request') {
      return res.sendStatus(httpStatusCode.BAD_REQUEST);
    }
    return res.sendStatus(httpStatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function get(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const question = await questionService.getQuestion(Number(id));
    return res.status(httpStatusCode.OK).send(question);
  } catch (error) {
    if (error.message === 'Bad request') {
      return res.sendStatus(httpStatusCode.BAD_REQUEST);
    }
    if (error.message === 'Not found') {
      return res.sendStatus(httpStatusCode.NOT_FOUND);
    }
    return res.sendStatus(httpStatusCode.INTERNAL_SERVER_ERROR);
  }
}

export async function answer(req: Request, res: Response) {
  const questionId: number = Number(req.params.id);
  const { answer } = req.body;
  const { user } = res.locals;
  try {
    const question = await questionService.getQuestion(Number(questionId));
    if (!question) return res.sendStatus(httpStatusCode.NOT_FOUND);

    return res.status(httpStatusCode.OK).send(question);
  } catch (error) {
    if (error.message === 'Bad request') {
      return res.sendStatus(httpStatusCode.BAD_REQUEST);
    }
    if (error.message === 'Not found') {
      return res.sendStatus(httpStatusCode.NOT_FOUND);
    }
    return res.sendStatus(httpStatusCode.INTERNAL_SERVER_ERROR);
  }
}
