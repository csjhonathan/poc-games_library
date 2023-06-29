import { PlatformInsert } from '@/protocols/protocols';
import Joi from 'joi';

export const platformSchema = Joi.object<PlatformInsert>({
  name:Joi
    .string()
    .required()
});