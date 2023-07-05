import { PrismaClient } from '@prisma/client';
import pg from 'pg';
import 'dotenv/config';
export const prisma = new PrismaClient();



const { Pool } = pg;

export const db = new Pool({
  host: process.env.HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME
});