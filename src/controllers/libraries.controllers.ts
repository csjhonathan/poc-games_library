import { Request, Response } from 'express';

import * as librariesServices from '@/services/libraries.services';

export async function getLibraries(req:Request, res:Response): Promise<Response> {
    const libs = await librariesServices.getLibraries();
    return res.send(libs);
}