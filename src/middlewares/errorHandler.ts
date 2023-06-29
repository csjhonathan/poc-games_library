import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { ValidationError } from 'joi';

export function errorHandler(error: ErrorRequestHandler | any, req: Request, res: Response, next: NextFunction): RequestHandler | void {
    if (error instanceof ValidationError) {
        const joiError: ValidationError = error;
        const messages = { message: joiError.details.map((er) => er.message) };
        res.status(422).send(messages);
        return;
    }

    res.status(500).send(error.message);
    res.status(httpStatus.BAD_REQUEST).send(error.message);
}