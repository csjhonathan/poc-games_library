import { Request, Response } from 'express';

import * as librariesServices from '@/services/libraries.services';
import { LibInsertion, LibUpdate } from '@/protocols/protocols';

export async function getLibraries(req:Request, res:Response): Promise<void> {
  const {game} = req.query as any;
  const libs = await librariesServices.getLibraries(game);
  res.send(libs);
}

export async function creatLibrary(req:Request, res:Response): Promise<void>{
  try {
    const {  playerId, gameId } = req.body as LibInsertion;
    await librariesServices.createLibrary(playerId, gameId);
    res.status(201).send({message:'Jogo adicionado à biblioteca'});
  } catch (error) {
    res.status(409).send(error.message);
  }
}

export async function getLibrariesByPlayerId(req:Request, res:Response): Promise<void>{
  try {
    const {playerId} = req.params;
    const {game} = req.query as any;
    const playerLib = await librariesServices.getLibrariesByPlayerId(Number(playerId), game);
    res.send(playerLib);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

export async function updateLibrary(req:Request, res:Response):Promise<void> {
  try {
    const {libraryId} = req.params as any;
    const {grade,status} = req.body as LibUpdate;
    await librariesServices.updateLibrary(libraryId, grade,status);
    res.send({message: 'Biblioteca atualizada'});
  } catch (error) {
    res.status(404).send(error.message);
  }
}

export async function getLibraryById(req:Request, res:Response) :Promise<void>{
  try {
    const {libraryId} = req.params as any;
    const lib = await librariesServices.getLibraryById(Number(libraryId));
    res.send(lib);
  } catch (error) {
    res.status(404).send(error.message);
  }
}


export async function deleteLibrary(req:Request, res:Response): Promise<void> {
  try {
    const {libraryId} = req.params as any;
    const lib = await librariesServices.deleteLibrary(Number(libraryId));
    res.status(204).send({message:'Biblioteca deletada!'});
  } catch (error) {
    res.status(404).send(error.message);
  }
}