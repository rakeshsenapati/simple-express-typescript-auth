import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import * as config from '../config/config';
import { AppError } from '../common/error.model';
const jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
const secretOrKey = config.JWT_SECRET as string;
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export const verifyAccessToken = async (req: Request, res: Response, next: NextFunction) => {
    passport.use(
        new Strategy({ jwtFromRequest, secretOrKey }, function (jwt_payload: JwtPayload, done: (arg0: any, arg1: any) => any) {
            if (!jwt_payload.userId)
                return done(new AppError("Unauthorized", 401), false);
            return done(null, jwt_payload);
        })
    );
    passport.authenticate("jwt", { session: false }, (err: any, user: JwtPayload, info: any) => {
        if (err) return next(new AppError('Unauthorized', 401));
        if (info) return next(new AppError('Unauthorized', 401));
        req.user = user;
        return next();
    })(req, res, next);
};
