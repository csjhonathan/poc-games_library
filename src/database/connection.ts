import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const db = new Pool({
    host: process.env.HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME
});

export default db ;