const { AppError } = require('../../common/error.model')
import { Request, Response, NextFunction } from 'express';
import Joi from "joi";

export const registerValidation = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        firstName: Joi.string().optional(),
        lastName: Joi.string().optional(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(
            new RegExp(
                "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,20}$"
            )
        ).required(),
    });
    const { error } = schema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const errorField = error.details[0].path[0]
        if (errorField === 'password') {
            if (error.details[0].type === "string.pattern.base") {
                return next(new AppError('Invalid password', 400));
            }
        }
        return next(new AppError(error.details[0]?.message, 400));
    }
    next();
}

export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    const { error } = schema.validate(req.body, {
        abortEarly: false,
    });
    if (error) {
        const errorField = error.details[0].path[0]
        if (errorField === 'password') {
            if (error.details[0].type === "string.pattern.base") {
                next(new AppError('Invalid password', 400))
                return
            }
        }
        return next(new AppError(error.details[0]?.message, 400))
    }
    next();
};
