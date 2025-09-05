import Banner from "@/components/share/Banner";
import { auth } from "@/lib/auth";
import React from "react";

const HomePage = async () => {
  const session = await auth();
  return (
    <React.Fragment>
      <main>
        <Banner session={session} />
      </main>
    </React.Fragment>
  );
};

export default HomePage;
