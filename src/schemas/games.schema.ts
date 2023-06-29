import { GameInsert } from '@/protocols/protocols';
import Joi from 'joi';

export const gameSchema = Joi.object<GameInsert>({
  name:Joi
    .string()
    .required(),
  platformId:Joi
    .number()
    .required()
});