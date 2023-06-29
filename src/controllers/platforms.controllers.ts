import * as platformsServices from '@/services/platforms.services';
import {  PlatformInsert } from '@/protocols/protocols';
import { Request, Response } from 'express';

export async function createPlatform(req:Request, res:Response): Promise<void> {
    try {
        const {name } = req.body as PlatformInsert;
        await platformsServices.createPlatform(name);
        res.status(201).send({message:'Plataforma inserida com sucesso'});
    } catch (error) {
        res.status(409).send(error.message);
    }
}

export async function getPlatforms(req:Request, res:Response) : Promise<void>{
    const platforms = await platformsServices.getPlatforms();
    res.status(200).send(platforms);
}