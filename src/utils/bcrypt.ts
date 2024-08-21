import bcrypt from 'bcrypt';

export const convertToHash = (text: string) => {
    return bcrypt.hashSync(text, 10);
}

export const compareHash = (text: string, hash: string) => {
    console.log(text, hash)
    return bcrypt.compareSync(text, hash)
}