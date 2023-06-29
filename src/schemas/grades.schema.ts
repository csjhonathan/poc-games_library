import { Grade } from '@/protocols/protocols';
import Joi from 'joi';

export const gradeSchema = Joi.object<Grade>({
  name:Joi
    .string()
    .required()
});