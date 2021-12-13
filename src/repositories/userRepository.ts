import connection from '../database/database';
import { Ranking, UserBody } from '../protocols/interfaces';

async function checkConflict(userBody: UserBody) {
    const result = await connection.query(`
        SELECT * FROM users 
        WHERE name = $1
        AND class = $2
    ;`, [userBody.name, userBody.class]);

    return result.rowCount;
}

async function createUser(userBody: UserBody): Promise<number> {
    const result = await connection.query(`
        INSERT INTO users
            (name, class)
        VALUES ($1, $2)
        RETURNING id
    ;`, [userBody.name, userBody.class]);
    return result.rows[0].id;
}

async function createSession(userId: number, token: string) {
    await connection.query(`
        INSERT INTO sessions 
            (user_id, token)
        VALUES ($1, $2)
    `, [userId, token]);
}

async function updateUserAnswers(userId: number) {
    await connection.query(`
        UPDATE users
        SET answers = answers + $1
        WHERE id = $2
    ;`, [1, userId]);
}

async function selectTopUsers(): Promise<Ranking[]> {
    const result = await connection.query(`
        SELECT name, answers 
        FROM users 
        ORDER BY answers DESC 
        LIMIT $1;
    ;`, [10]);
    return result.rows;
}

export {
    checkConflict,
    createUser,
    createSession,
    updateUserAnswers,
    selectTopUsers,
};
