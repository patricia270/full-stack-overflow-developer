import * as answerRepository from '../repositories/answerRepository';

async function authentication(authorization: string) {
    const token = authorization?.replace('Bearer ', '');
    return token;
}

async function selectAnsweredBy(token: string) {
    const result = await answerRepository.selectAnsweredBy(token);
    return result;
}

async function createAnswer(id: number, answeredBy: string, answer: string) {
    await answerRepository.createAnswer(id, answeredBy, answer);
}

async function updateAnswered(id: number) {
    await answerRepository.updateAnswered(id);
}

export {
    authentication,
    selectAnsweredBy,
    createAnswer,
    updateAnswered,
};
