import { ICreateUserData, ICreateSessionData } from './../services/authService';
import prisma from "../config/database.js";

async function findUserByEmail(email: string) {
    const user = await prisma.users.findUnique({
        where: {email}
    });

    return user;
}

async function insertUser(createUserData: ICreateUserData){
    await prisma.users.create( {data: createUserData} );
    return;
}

async function insertSession(userId: ICreateSessionData) {
    const {id} = await prisma.sessions.create({
        data: userId
    });
    return id
}

const authRepository = {
    findUserByEmail,
    insertUser,
    insertSession
}

export default authRepository;