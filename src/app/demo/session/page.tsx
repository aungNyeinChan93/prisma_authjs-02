import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export const signOutAction = async () => {
  "use server";
  await signOut({ redirectTo: "/api/auth/signin" });
  return;
};

const DemoSessionPage = async () => {
  const session = await auth();
  if (!session) {
    return redirect("/api/auth/signin");
  }
  return (
    <React.Fragment>
      <main>
        <form action={signOutAction}>
          <Button variant={"destructive"} type="submit">
            Logout
          </Button>
        </form>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default DemoSessionPage;
