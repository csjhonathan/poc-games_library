import { Grade } from '@/protocols/protocols';
import * as gradesRepository from '@/repositories/grades.repository';

export async function createGrade(name:string) : Promise<number> {
  const result = await gradesRepository.createGrade(name);
  if(!result){
    throw {message:'Esta nota já existe!'};
  }

  return result;
}

export async function getGrades() : Promise<Grade[]> {
  return gradesRepository.getGrades();
}