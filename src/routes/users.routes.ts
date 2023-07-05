import { Router } from 'express';
import * as usersControllers from '@/controllers/users.controllers';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { userSchema } from '@/schemas/users.schema';

const usersRouter = Router();

usersRouter.post('/users',schemaValidator(userSchema), usersControllers.createUser);
usersRouter.get('/users',usersControllers.getUser);

export default usersRouter;