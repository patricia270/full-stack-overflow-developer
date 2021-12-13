import { Request, Response } from 'express';
import { HttpResponse } from '../protocols/interfaces';
import answerBodySchema from '../schemas/answerSchema';
import * as answerService from '../services/answerService';

async function postAnswer(req: Request, res: Response): Promise<HttpResponse> {
    const { id } = req.params;
    const { answer } = req.body;
    const { authorization } = req.headers;

    const invalidBody = answerBodySchema.validate(answer).error;
    const token = await answerService.authentication(authorization);

    if (!token) {
        return res.sendStatus(401);
    }

    if (invalidBody) {
        return res.sendStatus(400);
    }

    try {
        const result = await answerService.checkAnsweredQuestion(Number(id));

        if (result) {
            return res.sendStatus(404);
        }

        const answeredBy = await answerService.selectAnsweredBy(token);
        await answerService.createAnswer(Number(id), answeredBy, answer);

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postAnswer,
};
