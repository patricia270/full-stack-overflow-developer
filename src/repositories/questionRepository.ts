import connection from '../database/database';
import {
    QuestionBody,
    UnansweredQuestion,
    answeredQuestion,
} from '../protocols/interfaces';

async function createQuestion(questionBody : QuestionBody) {
    const {
        question,
        student,
        tags,
    } = questionBody;

    const result = await connection.query(`
        INSERT INTO questions 
            (question, student, class, tags, submit_at)
        VALUES ($1, $2, $3, $4, NOW()) returning id
        ;`, [question, student, questionBody.class, tags]);
    return result.rows[0];
}

async function selectQuestions(): Promise<UnansweredQuestion[]> {
    const result = await connection.query(`
        SELECT id, question, student, class,
            tags, submit_at AS "submitAt"
        FROM questions
        WHERE answered = $1
    ;`, [false]);

    return result.rows;
}

async function selectUnansweredQuestion(id: number): Promise<UnansweredQuestion> {
    const result = await connection.query(`
        SELECT question, student, class,
            tags, answered, submit_at AS "submitAt"
        FROM questions WHERE id = $1
    ;`, [id]);
    return result.rows[0];
}

async function SelectAnsweredQuestion(id: number): Promise<answeredQuestion> {
    const result = await connection.query(`
        SELECT question, student, class, tags, answered,
            submit_at AS "submitAt", answered_at AS "answeredAt",
            answered_by AS "answeredBy", answer
        FROM questions 
        JOIN answers ON questions.id = answers.question_id 
        AND questions.id = $1;
    ;`, [id]);
    return result.rows[0];
}

async function increaseScore(id: number) {
    await connection.query(`
        UPDATE questions
        SET score = score + $1
        WHERE id = $2
    ;`, [1, id]);
}

async function decreaseScore(id: number) {
    await connection.query(`
        UPDATE questions
        SET score = score - $1
        WHERE id = $2
    ;`, [1, id]);
}

export {
    createQuestion,
    selectQuestions,
    selectUnansweredQuestion,
    SelectAnsweredQuestion,
    increaseScore,
    decreaseScore,
};
