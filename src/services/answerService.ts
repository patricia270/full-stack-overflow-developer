import { UserCreated } from '../protocols/interfaces';
import * as answerRepository from '../repositories/answerRepository';
import * as userService from '../services/userService';

async function authentication(authorization: string) {
    const token = authorization?.replace('Bearer ', '');
    return token;
}

async function selectAnsweredBy(token: string) {
    const result = await answerRepository.selectAnsweredBy(token);
    return result;
}

async function updateAnswered(id: number) {
    await answerRepository.updateAnswered(id);
}

async function createAnswer(id: number, answeredBy: UserCreated, answer: string) {
    await answerRepository.createAnswer(id, answeredBy.name, answer);
    await updateAnswered(id);
    await userService.updateUserAnswers(answeredBy.id);
}

async function checkAnsweredQuestion(id: number): Promise<boolean | null> {
    const result = await answerRepository.checkAnsweredQuestion(id);
    if (!result) {
        return null;
    }
    return result.answered;
}

export {
    authentication,
    selectAnsweredBy,
    createAnswer,
    updateAnswered,
    checkAnsweredQuestion,
};
