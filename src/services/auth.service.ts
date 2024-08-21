import { convertToHash, compareHash } from '../utils/bcrypt';
import jwt from 'jsonwebtoken';
import { AppError } from '../common/error.model';
import db from '../models/index';
import config from '../config/config';
const jwtSecret = config.JWT_SECRET as string;
export const login = async (userInput: any) => {
    const user: any = await db.User.findOne({ where: { email: userInput.email } });
    if (!user) {
        throw new AppError("User Not Found", 204);
    }
    const isPasswordMatched = compareHash(userInput.password, user.password)
    if (!isPasswordMatched) {
        throw new AppError("Invalid credentials", 400);
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, jwtSecret, {
        expiresIn: "24h",
    });

    return {
        token: token,
        user: { userId: user.id, email: user.email },
    };
}

export const register = async (userInput: any = {}) => {
    const { password } = userInput;
    userInput.password = convertToHash(password);
    const user = await db.User.create(userInput);
    return user;
}

