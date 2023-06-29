import { Router } from 'express';
import * as gamesControllers from '@/controllers/games.controllers';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { gameSchema } from '@/schemas/games.schema';

const gamesRouter = Router();

gamesRouter.post('/games',schemaValidator(gameSchema),gamesControllers.createGame);
gamesRouter.get('/games',gamesControllers.getGames);

export default gamesRouter;