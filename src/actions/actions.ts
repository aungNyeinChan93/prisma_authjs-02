'use server'

import { signIn, signOut } from "@/lib/auth";
import { CredentialsSignin } from "next-auth";
import { redirect } from "next/navigation";


export const signOutAction = async () => {
    await signOut({ redirect: false });
    return redirect('/auth/login')
};


export const loginWithGithub = async () => {
    await signIn("github", { redirectTo: "/" });
};


export async function loginWithCredential(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        throw new Error('Some fileds are required!')  //global error
    }

    try {
        await signIn("credentials", {
            redirect: false,
            email,
            password,
        });
    } catch (error) {
        const err = error as CredentialsSignin;
        console.error("Login failed:", err?.message);
    }
    redirect('/')
}