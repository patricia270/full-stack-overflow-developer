import { QuestionBody } from '../protocols/interfaces';
import * as questionRepository from '../repositories/questionRepository';

async function createQuestion(questionBody : QuestionBody) {
    const questionId = await questionRepository.createQuestion(questionBody);
    return questionId;
}

async function selectQuestions() {
    const questionsList = await questionRepository.selectQuestions();
    return questionsList;
}

export {
    createQuestion,
    selectQuestions,
};
