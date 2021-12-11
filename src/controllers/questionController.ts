import { Request, Response } from 'express';
import { QuestionBody } from '../protocols/interfaces';
import { questionBodySchema } from '../schemas/questionSchema';
import * as questionService from '../services/questionService';

async function postQuestion(req: Request, res: Response) {
    const questionBody : QuestionBody = req.body;
    const invalidBody = questionBodySchema.validate(questionBody).error;

    if (invalidBody) {
        return res.sendStatus(400);
    }

    try {
        await questionService.createQuestion(questionBody);

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postQuestion,
};
