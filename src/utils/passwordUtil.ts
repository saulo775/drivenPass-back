import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.KEY_CRYPTR);

export async function encryptPassword(password: string) {
    const encPassword = cryptr.encrypt(password);
    return encPassword;
}

export async function decryptPassword(password: string) {
    const encPassword = cryptr.decrypt(password);
    return encPassword;
}
