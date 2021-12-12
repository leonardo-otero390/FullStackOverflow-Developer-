import joi from 'joi';

const questionBodySchema = joi.object({
  question: joi.string().min(3).required(),
  student: joi.string().min(3).required(),
  class: joi.string().min(2).max(4).required(),
  tags: joi.string().min(3).required(),
});

export { questionBodySchema };
