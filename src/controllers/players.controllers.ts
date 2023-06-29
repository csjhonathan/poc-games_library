import * as playersServices from '@/services/players.services';
import {  PlayerInsert } from '@/protocols/protocols';
import { Request, Response } from 'express';

export async function createPlayer(req:Request, res:Response): Promise<void> {
    try {
        const {name } = req.body as PlayerInsert;
        await playersServices.createPlayer(name);
        res.status(201).send({message:'Player inserido com sucesso'});
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export async function getPlayers(req:Request, res:Response) : Promise<void>{
    const players = await playersServices.getPlayers();
    res.status(200).send(players);
}