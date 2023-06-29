import { ErrorRequestHandler, NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status';
import { ValidationError } from 'joi';

interface ErrorHanler extends ErrorRequestHandler {
  message : string;
}

export default function errorHandler(error: ErrorHanler, req: Request, res: Response, next: NextFunction): RequestHandler {
    console.log('chegou em mim');

    if (error instanceof ValidationError) {
        const joiError: ValidationError = error;
        const messages = { message: joiError.details.map((er) => er.message) };
        res.status(422).send(messages);
        return;
    }
    res.status(httpStatus.BAD_REQUEST).send(error.message);
}