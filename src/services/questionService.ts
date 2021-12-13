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

async function selectUnansweredQuestion(id: number) {
    const result = await questionRepository.selectUnansweredQuestion(id);
    return result;
}

async function SelectAnsweredQuestion(id: number) {
    const result = await questionRepository.SelectAnsweredQuestion(id);
    return result;
}

export {
    createQuestion,
    selectQuestions,
    selectUnansweredQuestion,
    SelectAnsweredQuestion,
};
