import { RequestHandler } from 'express';
import { ObjectSchema } from 'joi';

export default function schemaValidator(schema:ObjectSchema):RequestHandler{
    return(req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            throw error;
        }
        res.locals.schema = value;
        return next();
    };
}