import faker from 'faker';

class AnswerBody {
  answer: string;

  answerner_id: number;

  constructor(answernerId: number) {
    this.answer = faker.lorem.words(10);
    this.answerner_id = answernerId;
  }
}

export { AnswerBody };
