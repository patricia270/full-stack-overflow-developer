import { QuestionBody } from '../protocols/interfaces';
import * as questionRepository from '../repositories/questionRepository';

async function createQuestion(questionBody : QuestionBody) {
    await questionRepository.createQuestion(questionBody);
}

export {
    createQuestion,
};
