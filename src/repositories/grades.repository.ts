import {db} from '@/database/connection';
import { Grade, PGQuery } from '@/protocols/protocols';

export async function createGrade(name : string) : Promise<number>{

  const query : PGQuery = {
    text:`
          INSERT INTO grades (name)
          SELECT $1
          WHERE
            NOT EXISTS (
              SELECT *
              FROM grades
              WHERE grades.name = $1
            );
        `,
    values : [name]
  };

  const {rowCount} = await db.query(query);

  return rowCount;
}

export async function getGrades() : Promise<Grade[]>{

  const query : PGQuery = {
    text:`
          SELECT * FROM grades;
        `
  };

  const {rows} = await db.query(query);

  return rows;
}