import {db, prisma} from '@/database/connection';
import { Grade, PGQuery } from '@/protocols/protocols';

export async function createGrade(name : string){
  const grade = await prisma.grade.create({
    data : {
      name,
    }
  });

  return grade;
}

export async function getGradeByName(name:string) {
  const grade = await prisma.grade.findFirst({
    where: {
      name,
    },
  });

  return grade;
}

export async function getGrades(){
  const grades = await prisma.grade.findMany();
  return grades;
}