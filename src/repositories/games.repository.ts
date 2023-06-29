import db from '@/database/connection';
import { Game, PGQuery } from '@/protocols/db.query.protocol';

export async function createGame(name : string, platformId : number) : Promise<number>{

    const query : PGQuery = {
        text:`
          INSERT INTO games (name, platform_id)
          SELECT $1, $2
          WHERE
            NOT EXISTS (
              SELECT *
              FROM games
              WHERE games.name = $1 AND platform_id = $2
            );
        `,
        values : [name, platformId]
    };

    const {rowCount} = await db.query(query);

    return rowCount;
}

export async function getGames() : Promise<Game[]>{

    const query : PGQuery = {
        text:`
          SELECT games.id, games.name AS name, platforms.name AS platform
          FROM games
          JOIN platforms ON games.platform_id = platforms.id;
        `
    };

    const {rows} = await db.query(query);

    return rows;
}