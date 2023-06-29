import { Router } from 'express';
import * as librariesControllers from '@/controllers/libraries.controllers';
const libraryRouter = Router();

libraryRouter.get('/libraries', librariesControllers.getLibraries);

export default libraryRouter;