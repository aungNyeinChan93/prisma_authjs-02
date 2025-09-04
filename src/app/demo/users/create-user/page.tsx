"use client";

import React, { useActionState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { createUser } from "../action";

const DemonCreateUserPage = () => {
  const [state, userCreateAction] = useActionState(createUser, undefined);

  return (
    <React.Fragment>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <main className="w-full min-h-screen flex justify-center items-center px-4">
        <form
          action={userCreateAction}
          className="w-[400px] bg-indigo-300 text-slate-600 p-6 rounded-2xl shadow-lg "
        >
          {!state?.success && (
            <p className="text-red-600 p-2">{state?.message as string}</p>
          )}
          <div>
            <Label htmlFor="name" className="my-3 ">
              <span>Name</span>
            </Label>
            <Input type="text" name="name" id="name" />
          </div>
          <div>
            <Label htmlFor="email" className="my-3 ">
              <span>Email</span>
            </Label>
            <Input type="text" name="email" id="email" />
          </div>
          <div>
            <Label htmlFor="password" className="my-3 ">
              <span>Password</span>
            </Label>
            <Input type="text" name="password" id="password" />
          </div>
          <Button type="submit" variant={"secondary"} className="mt-4">
            Create User
          </Button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default DemonCreateUserPage;
