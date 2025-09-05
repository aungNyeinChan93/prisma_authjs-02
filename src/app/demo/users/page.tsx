import { Button } from "@/components/ui/button";
import prisma from "@/lib/db/prisma";
import Link from "next/link";
import React from "react";

const DemoUserPage = async () => {
  const users = await prisma.user.findMany({
    orderBy: { created_at: "desc" },
    include: {
      Profile: true,
    },
    take: 10,
  });
  return (
    <React.Fragment>
      <main>
        <Button type="button" className="ms-2 mt-3" variant={"default"}>
          <Link href={"/demo/users/create-user"}>Create User</Link>
        </Button>
        <section>
          <pre>{JSON.stringify(users, null, 2)}</pre>
        </section>
      </main>
    </React.Fragment>
  );
};

export default DemoUserPage;
