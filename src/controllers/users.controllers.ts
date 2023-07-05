import * as usersServices from '@/services/users.services';
import { User } from '@prisma/client';
import { Request, Response } from 'express';

export async function createUser(req:Request, res:Response): Promise<void> {
  try {
    const { name, email } = req.body as User;
    await usersServices.createUser(name, email);
    res.status(201).send({message:'Usuário registrado com sucesso!'});
  } catch (error) {
    res.status(409).send(error.message);
  }
}

export async function getUser(req:Request, res:Response) : Promise<void>{
  const users = await usersServices.getUsers();
  res.status(200).send(users);
}