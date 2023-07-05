import * as gamesRepository from '@/repositories/games.repository';

async function getGameByPlatformAndTitle(title:string, platformId: number) {
  const game = await gamesRepository.getGameByPlatformAndTitle(title , platformId);
  return game;
}

export async function createGame(name:string, platformId:number){
  const gameExist = await getGameByPlatformAndTitle(name, platformId);

  if(gameExist){
    throw {message:'Este jogo já existe nesta plataforma!'};
  }

  const game = await gamesRepository.createGame(name , platformId);

  return game;
}

export async function getGames(){
  const games = await gamesRepository.getGames();

  return games.map( ({id, title, platforms}) => {
    return {
      id,
      title,
      platform: platforms.name
    };
  } );
}