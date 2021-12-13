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

async function updateUserAnswers(userId: number) {
    await userRepository.updateUserAnswers(userId);
}

async function selectTopUsers() {
    const result = await userRepository.selectTopUsers();
    return result;
}

export {
    checkConflit,
    createUser,
    createSession,
    updateUserAnswers,
    selectTopUsers,
};
