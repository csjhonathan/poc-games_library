import { Router } from 'express';
import * as platformsControllers from '@/controllers/platforms.controllers';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { platformSchema } from '@/schemas/platforms.schema';

const platformsRouter = Router();

platformsRouter.post('/platforms',schemaValidator(platformSchema),platformsControllers.createPlatform);
platformsRouter.get('/platforms',platformsControllers.getPlatforms);

export default platformsRouter;