/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import prisma from "@/lib/db/prisma";
import { hashPassword } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


// create user | register user
export async function createUser(initialState: any, formdata: FormData) {
    const name = formdata.get("name") as string | undefined;
    const email = formdata.get("email") as string | undefined;
    const password = formdata.get("password") as string | undefined;

    if (!name || !email || !password) {  //use zod 
        return { success: false, message: 'Some Fields are required' }
    }

    try {
        await prisma.user.create({
            data: { name, email, password: await hashPassword(password) }
        })
    } catch (error) {
        if (error instanceof Error) {
            console.error(error)
            return { success: false, message: error?.message }
        }
    }

    revalidatePath('/demo/users')
    return redirect('/demo/users')
}

// login user | auth user

export async function authUser() {
    return {}
}