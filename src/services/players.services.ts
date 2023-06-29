import { Player } from '@/protocols/protocols';
import * as playersRepository from '@/repositories/players.repository';

export async function createPlayer(name:string) : Promise<void> {
    const result = await playersRepository.createPlayer(name);
    if(!result){
        throw ({message:'Este player já está cadastrado!'});
    }
}

export async function getPlayers() : Promise<Player[]> {
    return playersRepository.getPlayers();
}