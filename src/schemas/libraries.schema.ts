import { LibUpdate } from './../protocols/protocols';
import { LibInsertion } from '@/protocols/protocols';
import Joi from 'joi';

export const libInsertionSchema = Joi.object<LibInsertion>({
  gameId:Joi
    .number()
    .required(),
  playerId: Joi
    .number()
    .required()
});

export const libUpdateSchema = Joi.object<LibUpdate>({
  status:Joi
    .boolean()
    .required(),
  grade:Joi
    .number()
    .required()
});