import faker from 'faker';

class UserBody {
  name: string;

  className: string;

  token: string;

  constructor() {
    this.name = faker.name.firstName();
    this.className = faker.datatype.string(2);
    this.token = faker.datatype.uuid();
  }
}

export { UserBody };
