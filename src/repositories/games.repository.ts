import {prisma} from '@/database/connection';

export async function createGame(title : string, platformId : number){

  const game = await prisma.game.create({
    data : {
      title,
      platform_id:platformId,
    }
  });

  return game;
}

export async function getGameByPlatformAndTitle(title:string, platformId: number) {
  const game = await prisma.game.findFirst({
    where: {
      title,
      platform_id: platformId,
    },
  });

  return game;
}

export async function deleteGame(id:number){

  const game = await prisma.game.delete({
    where:{
      id
    }
  });

  return game;
}

export async function getGames(){

  const games = await prisma.game.findMany({
    select: {
      id: true,
      title: true,
      platforms: {
        select: {
          name: true
        }
      }
    }
  });

  return games;
}