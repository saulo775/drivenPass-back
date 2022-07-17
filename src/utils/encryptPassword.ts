import bcrypt from "bcrypt";

export async function encryptPassword(password: string) {
    const encPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
    return encPassword;
}