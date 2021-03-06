import connection from '../database/database';
import { UserCreated } from '../protocols/interfaces';

async function selectAnsweredBy(token: string): Promise<UserCreated> {
    const result = await connection.query(`
        SELECT * FROM users 
        WHERE id = (
            SELECT user_id
            FROM sessions 
            WHERE token = $1
        )
    ;`, [token]);
    return result.rows[0];
}

async function createAnswer(id: number, answeredBy: string, answer: string) {
    await connection.query(`
        INSERT INTO answers 
            (question_id, answered_by, answer, answered_at)
        VALUES ($1, $2, $3, NOW())
    ;`, [id, answeredBy, answer]);
}

async function updateAnswered(id: number) {
    await connection.query(`
        UPDATE questions
        SET answered = $1
        WHERE id = $2
    ;`, [true, id]);
}

async function checkAnsweredQuestion(id: number) {
    const result = await connection.query(`
        SELECT answered
        FROM questions
        WHERE id = $1
    ;`, [id]);
    return result.rows[0];
}

export {
    selectAnsweredBy,
    createAnswer,
    updateAnswered,
    checkAnsweredQuestion,
};
