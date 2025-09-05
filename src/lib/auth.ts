import NextAuth, { CredentialsSignin } from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import prisma from "./db/prisma"
import { isCorrect } from "@/utils/helper"
import { redirect } from "next/navigation"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub,
        Google,
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {

                const { email, password } = credentials;

                if (!email || !password) {
                    throw new CredentialsSignin('Input fields are required!')
                }

                const user = await prisma.user.findUnique({ where: { email: email as string } })
                if (!user) {
                    throw new Error('use is not exisit!')
                }

                const isValidate = await isCorrect(password as string, user?.password as string)
                if (!isValidate) {
                    throw new Error('Your credential is not correct!')
                }

                return user;
            }
        })
    ],
    pages: {
        'signIn': '/auth/login',

    }
})