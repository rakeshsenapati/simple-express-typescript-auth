import { asyncHandler } from '../middleware/async-handler';
import * as userService from '../services/user.service';
import { Request, Response, NextFunction } from 'express';

export const getUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.getUsers();
    res.send(users);
})

export const createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email } = req.body;
    const user = await userService.createUser({ firstName, lastName, email });
    res.send(user)
})

export const getUserById = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.findUser(+req.params.id);
    res.send(user);
})


