import {prisma} from '@/database/connection';

export async function getUserByEmail(email:string) {
  const user = prisma.user.findFirst({
    where:{
      email
    }
  });

  return user;
}
export async function createUser(name : string, email:string) {

  const user = prisma.user.create({
    data:{
      name,
      email
    }
  });

  return user;
}

export async function getUsers() {
  const users = prisma.user.findMany();
  return users;
}

