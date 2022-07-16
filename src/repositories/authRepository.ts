import { ICreateUserData } from './../services/authService';
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

const authRepository = {
    findUserByEmail,
    insertUser
}

export default authRepository;