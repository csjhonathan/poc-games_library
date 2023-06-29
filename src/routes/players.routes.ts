import { Router } from 'express';
import * as playersControllers from '@/controllers/players.controllers';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { playerSchema } from '@/schemas/players.schema';

const playersRouter = Router();

playersRouter.post('/players',schemaValidator(playerSchema), playersControllers.createPlayer);
playersRouter.get('/players',playersControllers.getPlayers);

export default playersRouter;