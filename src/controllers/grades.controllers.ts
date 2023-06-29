import * as gradesServices from '@/services/grades.services';
import { Grade } from '@/protocols/protocols';
import { Request, Response } from 'express';

export async function createGrade(req:Request, res:Response): Promise<void> {
  try {
    const {name} = req.body as Grade;
    await gradesServices.createGrade(name);
    res.status(201).send({message:'Nota inserida com sucesso'});
  } catch (error) {
    res.status(409).send(error.message);
  }
}

export async function getGrades(req:Request, res:Response) : Promise<void>{
  const grades = await gradesServices.getGrades();
  res.status(200).send(grades);
}