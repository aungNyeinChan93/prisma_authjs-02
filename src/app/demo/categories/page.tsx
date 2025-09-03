import prisma from "@/lib/db/prisma";
import React from "react";

const DemoCategories = async () => {
  const categories = await prisma.category.findMany();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default DemoCategories;
