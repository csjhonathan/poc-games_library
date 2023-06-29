import * as gamesService from '@/services/games.services';
import { GameInsert } from '@/protocols/protocols';
import { Request, Response } from 'express';

export async function createGame(req:Request, res:Response): Promise<void> {

    const {name, platformId } = req.body as GameInsert;
    await gamesService.createGame(name, platformId);
    res.status(201).send({message:'Jogo inserido com sucesso'});
}

export async function getGames(req:Request, res:Response): Promise<void> {
    const games = await gamesService.getGames();
    res.status(200).send(games);
}