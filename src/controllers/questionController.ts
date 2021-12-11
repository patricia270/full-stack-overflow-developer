import { Request, Response } from 'express';
import { QuestionBody } from '../protocols/interfaces';
import * as questionService from '../services/questionService';

async function postQuestion(req: Request, res: Response) {
    const questionBody : QuestionBody = req.body;

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
