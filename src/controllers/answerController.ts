import { Request, Response } from 'express';
import { HttpResponse } from '../protocols/interfaces';
import * as answerService from '../services/answerService';

async function postAnswer(req: Request, res: Response): Promise<HttpResponse> {
    const { id } = req.params;
    const { answer } = req.body;
    const { authorization } = req.headers;

    const token = await answerService.authentication(authorization);

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const answeredBy = await answerService.selectAnsweredBy(token);
        await answerService.createAnswer(Number(id), answeredBy, answer);
        await answerService.updateAnswered(Number(id));

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    postAnswer,
};
