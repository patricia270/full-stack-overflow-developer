import { Request, Response } from 'express';
import { QuestionBody, HttpResponse } from '../protocols/interfaces';
import { questionBodySchema } from '../schemas/questionSchema';
import * as questionService from '../services/questionService';

async function postQuestion(req: Request, res: Response): Promise<HttpResponse> {
    const questionBody : QuestionBody = req.body;
    const invalidBody = questionBodySchema.validate(questionBody).error;

    if (invalidBody) {
        return res.sendStatus(400);
    }

    try {
        const questionId = await questionService.createQuestion(questionBody);
        res.status(201).send(questionId);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getQuestions(req: Request, res: Response) {
    try {
        const questionsList = await questionService.selectQuestions();
        res.send(questionsList);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postQuestion,
    getQuestions,
};
