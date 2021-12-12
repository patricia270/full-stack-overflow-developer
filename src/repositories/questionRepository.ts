import connection from '../database/database';
import { QuestionBody, QuestionCreated } from '../protocols/interfaces';

async function createQuestion(questionBody : QuestionBody): Promise<QuestionCreated> {
    const {
        question,
        student,
        tags,
    } = questionBody;

    const result = await connection.query(`
        INSERT INTO questions 
            (question, student, class, tags, "submitAt")
         VALUES ($1, $2, $3, $4, NOW()) returning id
        ;`, [question, student, questionBody.class, tags]);
    return result.rows[0];
}

export {
    createQuestion,
};
