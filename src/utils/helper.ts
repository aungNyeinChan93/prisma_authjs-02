import { genSalt, hash, compare } from "bcrypt-ts";


export async function hashPassword(password: string | undefined, salt: number = 10): Promise<string> {
    return await hash(password as string, await genSalt(salt || 10))
}

export async function isCorrect(plainStr: string | undefined, hashStr: string | undefined) {
    return await compare(plainStr as string, hashStr as string)
}