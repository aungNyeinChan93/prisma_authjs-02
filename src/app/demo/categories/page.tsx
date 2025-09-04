import prisma from "@/lib/db/prisma";
import React from "react";

export const getCategories = async () => {
  const categories = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-cache",
    next: { revalidate: 60 },
  }).then((res) => res.json());
  return categories;
};

const DemoCategories = async () => {
  const categories = await prisma.category.findMany();
  const client_categories = await getCategories();
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
        <pre>{JSON.stringify(client_categories, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default DemoCategories;
