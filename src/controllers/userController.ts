import { Request, Response } from 'express';
import { UserBody } from '../protocols/interfaces';
import { userSchemmaBody } from '../schemas/userSchema';
import * as userService from '../services/userService';

async function registerUser(req: Request, res: Response) {
    const userBody: UserBody = req.body;
    const invalidBody = userSchemmaBody.validate(userBody).error;

    if (invalidBody) {
        return res.sendStatus(400);
    }

    try {
        const conflict = await userService.checkConflit(userBody);

        if (conflict) {
            return res.sendStatus(409);
        }

        const userId = await userService.createUser(userBody);
        const token = await userService.createSession(userId);

        res.status(201).send({ token });
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    registerUser,
};
