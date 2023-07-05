import * as gradesRepository from '@/repositories/grades.repository';

async function getGradeByName(name:string) {
  return await gradesRepository.getGradeByName(name);
}
export async function createGrade(name:string) {
  const gradeExists = await getGradeByName(name);

  if(gradeExists){
    throw {message:'Esta nota já existe!'};
  }

  const result = await gradesRepository.createGrade(name);
  return result;
}

export async function getGrades() {
  return gradesRepository.getGrades();
}