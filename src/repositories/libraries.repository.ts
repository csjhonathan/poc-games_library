import db from '@/database/connection';
import { PGQuery, UserLib } from '@/protocols/db.query.protocol';
import { QueryResult } from 'pg';

export async function getLibraries() : Promise<UserLib[]>{

    const query : PGQuery = {
        text: `
      SELECT l.id, p.name AS player, g.name AS game, pl.name AS platform, gd.name AS grade, l.finished
      FROM libraries l
      JOIN players p ON p.id = l.player_id
      JOIN games g ON g.id = l.game_id
      JOIN platforms pl ON pl.id = g.platform_id
      JOIN grades gd ON gd.id = l.grade_id;
    `
    };

    const {rows}:QueryResult<UserLib> = await db.query(query);

    return rows;
}