import db from '@/database/connection';
import { PGQuery, UserLib } from '@/protocols/protocols';
import { QueryResult } from 'pg';

export async function getLibraries(game = '') : Promise<UserLib[]>{

  const query : PGQuery = {
    text: `
      SELECT l.id, p.name AS player, g.name AS game, pl.name AS platform, gd.name AS grade, l.finished
      FROM libraries l
      JOIN players p ON p.id = l.player_id
      JOIN games g ON g.id = l.game_id
      JOIN platforms pl ON pl.id = g.platform_id
      JOIN grades gd ON gd.id = l.grade_id
      WHERE g.name ILIKE $1
    `,
    values:[`%${game}%`]
  };

  const {rows}:QueryResult<UserLib> = await db.query(query);

  return rows;
}

export async function createLibrary(playerId:number, gameId:number) : Promise<number>{

  const query : PGQuery = {
    text:`
          INSERT INTO libraries (player_id, game_id)
          SELECT $1, $2
          WHERE
            NOT EXISTS (
              SELECT *
              FROM libraries
              WHERE libraries.player_id = $1 AND libraries.game_id = $2
            );
        `,
    values : [playerId, gameId]
  };

  const {rowCount} = await db.query(query);

  return rowCount;
}

export async function getLibrariesByPlayerId(playerId:number, game ='') : Promise<[UserLib[], number]>{
  const query : PGQuery = {
    text: `
      SELECT l.id, p.name AS player, g.name AS game, pl.name AS platform, gd.name AS grade, l.finished
      FROM libraries l
      JOIN players p ON p.id = l.player_id
      JOIN games g ON g.id = l.game_id
      JOIN platforms pl ON pl.id = g.platform_id
      JOIN grades gd ON gd.id = l.grade_id
      WHERE l.player_id = $1 AND g.name ILIKE $2;
    `,
    values:[playerId, `%${game}%`]
  };

  const {rows, rowCount}:QueryResult<UserLib> = await db.query(query);

  return [rows, rowCount];
}

export async function updateLibrary(libraryId:number, grade:number,status:boolean) : Promise<number>{

  const query : PGQuery = {
    text:`
          UPDATE libraries
          SET grade_id = $2, finished = $3
          WHERE id = $1;
        `,
    values : [libraryId, grade,status]
  };

  const {rowCount} = await db.query(query);

  return rowCount;
}

export async function getLibraryById(libraryId:number) : Promise<UserLib>{

  const query : PGQuery = {
    text:`
      SELECT l.id, p.name AS player, g.name AS game, pl.name AS platform, gd.name AS grade, l.finished
      FROM libraries l
      JOIN players p ON p.id = l.player_id
      JOIN games g ON g.id = l.game_id
      JOIN platforms pl ON pl.id = g.platform_id
      JOIN grades gd ON gd.id = l.grade_id
      WHERE l.id = $1;
    `,
    values : [libraryId]
  };

  const {rows:[lib]} = await db.query(query);

  return lib;
}

export async function deleteLibrary(libraryId:number): Promise<number> {

  const query : PGQuery = {
    text:`
      DELETE from libraries
      WHERE id = $1;
    `,
    values : [libraryId]
  };
  const {rowCount} = await db.query(query);

  return rowCount;
}