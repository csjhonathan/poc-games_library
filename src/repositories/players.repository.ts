import {db} from '@/database/connection';
import { PGQuery, Player } from '@/protocols/protocols';

export async function createPlayer(name : string) : Promise<number>{

  const query : PGQuery = {
    text:`
          INSERT INTO players (name)
          SELECT $1
          WHERE
            NOT EXISTS (
              SELECT *
              FROM players
              WHERE players.name = $1
            );
        `,
    values : [name]
  };

  const {rowCount} = await db.query(query);

  return rowCount;
}

export async function getPlayers() : Promise<Player[]>{

  const query : PGQuery = {
    text:`
          SELECT players.id, players.name AS player
          FROM players;
        `
  };

  const {rows} = await db.query(query);

  return rows;
}

