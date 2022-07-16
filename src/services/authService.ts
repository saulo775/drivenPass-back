import { Users } from "@prisma/client";
import bcrypt from "bcrypt";
import { AppError } from "../errors/AppError.js";
import authRepository from "../repositories/authRepository.js";

export type ICreateUserData = Omit<Users, "id">

async function createNewUser({ email, password }: ICreateUserData) {    
    await checkIfUserAlreadyExists(email);
    const securityPassword = await encryptPassword(password);
    const data: ICreateUserData = {
        email,
        password: securityPassword
    }

    await authRepository.insertUser(data);
}

async function checkIfUserAlreadyExists(email: string) {
    const user = await authRepository.findUserByEmail(email);
    if (user) {
        throw new AppError("User Already registered", 409);
    }
}

async function encryptPassword(password: string) {
    const encPassword = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
    return encPassword;
}

const authService = {
    createNewUser,
}

export default authService;