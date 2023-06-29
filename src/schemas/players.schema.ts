import { PlayerInsert } from '@/protocols/protocols';
import Joi from 'joi';

export const playerSchema = Joi.object<PlayerInsert>({
  name:Joi
    .string()
    .required()
});