import * as gamesService from '@/services/games.services';
import { GameInsert } from '@/protocols/db.query.protocol';
import { Request, Response } from 'express';

export async function createGame(req:Request, res:Response) {
    try {
        const {name, platformId } = req.body as GameInsert;
        await gamesService.createGame(name, platformId);
        res.status(201).send({message:'Jogo inserido com sucesso'});
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export async function getGames(req:Request, res:Response) {
    const games = await gamesService.getGames();
    res.status(200).send(games);
}