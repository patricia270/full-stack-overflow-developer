import { v4 as uuid } from 'uuid';
import * as userRepository from '../repositories/userRepository';
import { UserBody } from '../protocols/interfaces';

async function checkConflit(userBody: UserBody) {
    const result = await userRepository.checkConflict(userBody);
    return result;
}

async function createUser(userBody: UserBody) {
    const result = await userRepository.createUser(userBody);
    return result;
}

async function createSession(id: number) {
    const token = uuid();
    await userRepository.createSession(id, token);
    return token;
}

export {
    checkConflit,
    createUser,
    createSession,
};
