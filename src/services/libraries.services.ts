import { UserLib } from '@/protocols/protocols';
import * as librariesRepository from '@/repositories/libraries.repository';
import { QueryResult } from 'pg';

export function getLibraries(game:string) : Promise<UserLib[]>{
  return librariesRepository.getLibraries(game);
}

export async function createLibrary(gameId:number, playerId:number) : Promise<number> {
  const result = await librariesRepository.createLibrary(gameId , playerId);

  if(!result){
    throw {message:'Este jogo já está na sua biblioteca!'};
  }

  return result;
}

export async function getLibrariesByPlayerId(playerId:number, game:string): Promise<UserLib[]> {
  const [result, count] = await librariesRepository.getLibrariesByPlayerId(playerId,game);
  if(!count){
    throw {message:'Esta biblioteca está vazia ou o usuário não existe!'};
  }
  return result;
}

export async function updateLibrary(libraryId:number, grade:number,status:boolean) : Promise<number> {
  const result = await librariesRepository.updateLibrary(libraryId, grade,status);

  if(!result){
    throw {message:'Este jogo já está na sua biblioteca!'};
  }

  return result;
}

export async function getLibraryById(libraryId:number):Promise<UserLib>{
  const result = await librariesRepository.getLibraryById(libraryId);
  if(!result) {
    throw {message:'biblioteca não encontrada'};
  }
  return result;
}

export async function deleteLibrary(library:number): Promise<number> {
  const result = await librariesRepository.deleteLibrary(library);
  if(!result) {
    throw {message:'biblioteca não encontrada'};
  }
  return result;
}