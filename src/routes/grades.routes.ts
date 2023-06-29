import { Router } from 'express';
import schemaValidator from '@/middlewares/schema.validator.middleware';
import { gradeSchema } from '@/schemas/grades.schema';
import * as gradesControllers from '@/controllers/grades.controllers';
const gradesRouter = Router();

gradesRouter.post('/grades', schemaValidator(gradeSchema), gradesControllers.createGrade);
gradesRouter.get('/grades', gradesControllers.getGrades);

export default gradesRouter;