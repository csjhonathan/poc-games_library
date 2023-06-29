import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'joi';
import 'express-async-errors';

export const errorHandler : ErrorRequestHandler = (error, req, res, next) => {
    if (error instanceof ValidationError) {
        const joiError: ValidationError = error;
        const messages = { message: joiError.details.map((er) => er.message) };
        res.status(422).send(messages);
        return;
    }

    res.status(500).send(error.message);
};