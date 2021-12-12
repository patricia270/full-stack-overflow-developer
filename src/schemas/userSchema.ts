import Joi from 'joi';

const userSchemmaBody = Joi.object({
    name: Joi.string().required().trim(),
    class: Joi.string().required().trim(),
});

export {
    userSchemmaBody,
};
