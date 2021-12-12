import { QuestionBody } from '../interfaces/interfaces';
import * as questionRepository from '../repositories/questionRepository';

export async function createQuestion(
  questionBody: QuestionBody,
): Promise<number> {
  const questioner: string = questionBody.student;
  const { question, tags } = questionBody;

  const questionId = await questionRepository.insertQuestion(
    questioner,
    question,
    tags,
  );

  if (!questionId) throw new Error();
  return questionId;
}
