import { Sessions, Users } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError.js";
import authRepository from "../repositories/authRepository.js";
import { encryptPassword } from "../utils/encryptPassword.js";

export type ICreateUserData = Omit<Users, "id">
export type ICreateSessionData = Omit<Sessions, "id">

async function createNewUser({ email, password }: ICreateUserData) {    
    await checkIfUserAlreadyExists(email);
    const securityPassword = await encryptPassword(password);
    const data: ICreateUserData = {
        email,
        password: securityPassword
    }

    await authRepository.insertUser(data);
}

async function createNewSession(loginUserData: ICreateUserData){
    const user = await checkIfCredentialsAreValid(loginUserData);
    const sessionData: ICreateSessionData= {
        userId: user.id
    }
    const sessionId = await authRepository.insertSession(sessionData);
    const token = await generateToken(user.id);

    return token;
}

async function checkIfUserAlreadyExists(email: string) {
    const user = await authRepository.findUserByEmail(email);
    if (user) {
        throw new AppError("User Already registered", 409);
    }
}

async function checkIfCredentialsAreValid({email, password}: ICreateUserData){
    const user = await authRepository.findUserByEmail(email);
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!user || !passwordCompare) {
        throw new AppError("email or password incorrect", 401);
    }
    
    return user;
}

async function generateToken(userId: Number) {
    const data = {userId};
    const secretKey = process.env.JWT_SECRET;
    const config = {expiresIn: process.env.JWT_EXPIRATION || '1d'};

    const token = jwt.sign(data, secretKey, config);
    return token;
}

const authService = {
    createNewUser,
    createNewSession,
}

export default authService;