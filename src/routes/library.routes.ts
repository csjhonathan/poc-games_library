import { Router } from 'express';
import * as librariesControllers from '@/controllers/libraries.controllers';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { libInsertionSchema, libUpdateSchema } from '@/schemas/libraries.schema';
const libraryRouter = Router();

libraryRouter.get('/libraries', librariesControllers.getLibraries);
libraryRouter.post('/libraries',schemaValidator(libInsertionSchema), librariesControllers.creatLibrary);
libraryRouter.get('/libraries/player/:playerId', librariesControllers.getLibrariesByPlayerId );
libraryRouter.put('/libraries/:libraryId', schemaValidator(libUpdateSchema), librariesControllers.updateLibrary);
libraryRouter.get('/libraries/:libraryId', librariesControllers.getLibraryById );
libraryRouter.delete('/libraries/:libraryId', librariesControllers.deleteLibrary );
export default libraryRouter;