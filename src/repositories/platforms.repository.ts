import { prisma } from '@/database/connection';

export async function createPlatform(name : string){

  const platform = await prisma.platform.create({
    data : {
      name,
    }
  });

  return platform;

}

export async function getPlatformByName(name:string) {
  const platform = await prisma.platform.findFirst({
    where: {
      name,
    },
  });

  return platform;
}

export async function getPlatform(){
  const platforms = await prisma.platform.findMany();
  return platforms;
}

