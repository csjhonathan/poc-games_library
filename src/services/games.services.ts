import { Game } from '@/protocols/protocols';
import * as gamesRepository from '@/repositories/games.repository';

export async function createGame(name:string, platformId:number) : Promise<number> {
    const result = await gamesRepository.createGame(name , platformId);
    if(!result){
        throw {message:'Este jogo já existe nesta plataforma!'};
    }

    return result;
}

export async function getGames() : Promise<Game[]> {
    return gamesRepository.getGames();
}