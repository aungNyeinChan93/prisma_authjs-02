'use server'

import prisma from "@/lib/db/prisma";
import { hashPassword } from "@/utils/helper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function registerAction(initialState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        // throw new Error('Some Fiels are required')
        return { success: false, error: 'Some Fields are required!' }
    }

    const user = await prisma.user.findUnique({ where: { email } })
    if (user) {
        // throw new Error('User Already Exist!')
        return { success: false, error: "User Already Exisit!" }
    }

    try {
        await prisma.user.create({
            data: {
                email, password: await hashPassword(password)
            }
        })
    } catch (error) {
        if (error instanceof Error) {
            return { success: false, error: error?.message }
        }
        return null
    }

    return redirect('/api/auth/signin')
}
