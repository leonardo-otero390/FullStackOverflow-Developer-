import { Question } from '../interfaces/interfaces';
import * as questionRepository from '../repositories/questionRepository';

export async function create(questionBody: Question): Promise<number> {
  const questionId = await questionRepository.insert(
    questionBody.student,
    questionBody.question,
    questionBody.tags,
    questionBody.class,
  );

  if (!questionId) throw new Error();
  return questionId;
}

export async function getQuestion(
  questionId: number,
): Promise<Question | Error> {
  if (Number.isNaN(questionId)) throw new Error('Bad request');
  const questionFound = await questionRepository.find(questionId);
  if (!questionFound) throw new Error('Not found');
  const answered: boolean = questionFound.answered;
  if (!answered) {
    delete questionFound.answeredAt;
    delete questionFound.answerner_id;
    delete questionFound.answer;
  }
  return questionFound;
}
