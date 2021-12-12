import connection from '../database/database';
import { UserBody } from '../protocols/interfaces';

async function checkConflict(userBody: UserBody) {
    const result = await connection.query(`
        SELECT * FROM users 
        WHERE name = $1 AND class = $2
    ;`, [userBody.name, userBody.class]);

    return result.rowCount;
}

async function createUser(userBody: UserBody): Promise<number> {
    const result = await connection.query(`
        INSERT INTO users (name, class)
        VALUES ($1, $2) returning id
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

export {
    checkConflict,
    createUser,
    createSession,
};
