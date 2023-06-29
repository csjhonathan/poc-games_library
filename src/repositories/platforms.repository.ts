import db from '@/database/connection';
import { PGQuery, Platform } from '@/protocols/protocols';

export async function createPlatform(name : string) : Promise<number>{

    const query : PGQuery = {
        text:`
          INSERT INTO platforms (name)
          SELECT $1
          WHERE
            NOT EXISTS (
              SELECT *
              FROM platforms
              WHERE platforms.name = $1
            );
        `,
        values : [name]
    };

    const {rowCount} = await db.query(query);

    return rowCount;
}

export async function getPlatforms() : Promise<Platform[]>{

    const query : PGQuery = {
        text:`
          SELECT platforms.id, platforms.name AS platform
          FROM platforms;
        `
    };

    const {rows} = await db.query(query);

    return rows;
}

