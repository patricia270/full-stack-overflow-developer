import connection from '../database/database';
import { QuestionBody } from '../protocols/interfaces';

async function createQuestion(questionBody : QuestionBody) {
    const {
        question,
        student,
        tags,
    } = questionBody;

    await connection.query(`
        INSERT INTO questions 
            (question, student, class, tags, "submitAt")
         VALUES ($1, $2, $3, $4, NOW())
        ;`, [question, student, questionBody.class, tags]);
}

export {
    createQuestion,
};
