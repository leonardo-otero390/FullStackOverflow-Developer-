import faker from 'faker';

class QuestionBody {
  question: string;

  student: string;

  class: string;

  tags: string;

  constructor() {
    this.question = faker.lorem.words(10);
    this.student = faker.internet.avatar();
    this.class = faker.random.alphaNumeric(2);
    this.tags = faker.random.words(3);
  }
}

export { QuestionBody };
