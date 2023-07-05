import * as usersRepository from '@/repositories/users.repository';

async function getUserByEmail(email:string) {
  return await usersRepository.getUserByEmail(email);
}
export async function createUser(name:string, email:string){
  const userExists = await getUserByEmail(email);

  if(userExists){
    throw ({message:'Este usuário já está registrado!'});
  }

  const result = await usersRepository.createUser(name, email);

  return result;
}

export async function getUsers(){
  return usersRepository.getUsers();
}