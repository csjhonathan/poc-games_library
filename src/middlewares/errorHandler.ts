import { ErrorRequestHandler } from 'express';

export const errorHandler : ErrorRequestHandler = (error, req, res, next) => {
    res.send(error.message);
};