import Joi from 'joi';

const questionBodySchema = Joi.object({
    question: Joi.string().required().trim(),
    student: Joi.string().required().trim(),
    class: Joi.string().required().trim(),
    tags: Joi.string().required().trim(),
});

export {
    questionBodySchema,
};
