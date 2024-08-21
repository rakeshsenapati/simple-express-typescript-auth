import db from '../models/index';
const User = db.User;

export const getUsers = async () => {
    return User.findAll();
}
export const createUser = async (user: any) => {
    return User.create(user);
}
export const findUser = async (id: number) => {
    return User.findOne({ where: { id } });
}
