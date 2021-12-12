import connection from '../database/database';

async function selectAnsweredBy(token: string): Promise<string> {
    const result = await connection.query(`
        SELECT name from users 
         WHERE id = (SELECT user_id FROM sessions 
          WHERE token = $1)
    ;`, [token]);
    return result.rows[0].name;
}

async function createAnswer(id: number, answeredBy: string, answer: string) {
    await connection.query(`
        INSERT INTO answers (question_id, answered_by, answer, answered_at)
         VALUES ($1, $2, $3, NOW())
    ;`, [id, answeredBy, answer]);
}

async function updateAnswered(id: number) {
    await connection.query(`
        UPDATE questions SET answered = $1
         WHERE id = $2
    ;`, [true, id]);
}

export {
    selectAnsweredBy,
    createAnswer,
    updateAnswered,
};
