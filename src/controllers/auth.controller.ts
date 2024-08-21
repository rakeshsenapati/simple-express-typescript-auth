import { asyncHandler } from '../middleware/async-handler';
import { CommonResponse } from '../common/common.model';
import * as authService from '../services/auth.service';
import { Request, Response, NextFunction } from 'express';
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const loginData = await authService.login(req.body);
    res.send(new CommonResponse('Login Success', loginData));
})

export const register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    await authService.register(req.body);
    res.send(new CommonResponse('Registration Success'));
})
