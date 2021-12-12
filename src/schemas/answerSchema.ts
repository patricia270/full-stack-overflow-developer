import Joi from 'joi';

const answerBodySchema = Joi.string().required().trim();

export default answerBodySchema;
