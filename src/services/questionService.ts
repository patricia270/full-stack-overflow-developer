import { QuestionBody } from '../protocols/interfaces';
import * as questionRepository from '../repositories/questionRepository';

async function createQuestion(questionBody : QuestionBody) {
    const questionId = await questionRepository.createQuestion(questionBody);
    return questionId;
}

export {
    createQuestion,
};
