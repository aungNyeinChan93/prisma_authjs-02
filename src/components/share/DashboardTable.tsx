import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db/prisma";

export const getUsers = async () => {
  const users = await prisma.user.findMany({
    orderBy: { created_at: "desc" },
    select: { id: true, name: true, email: true, password: true, role: true },
  });
  return users;
};

const DashboardTable = async () => {
  const users = await getUsers();
  return (
    <React.Fragment>
      <div className="px-2 py-5 rounded-2xl mx-2 mt-6 !bg-green-200">
        <Table>
          <TableCaption className="text-slate-500">
            A list of your recent invoices.
          </TableCaption>
          <TableHeader className="text-lg tracking-wider font-bold ">
            <TableRow>
              {Object.keys(users[0])?.map((d, idx) => (
                <TableHead className=" capitalize text-center" key={idx}>
                  {d}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users?.map((d, idx) => (
              <TableRow key={idx} className="text-[13px] text-center">
                <TableCell className="font-sans text-sm ">{d.id}</TableCell>
                <TableCell className="font-sans text-sm ">{d.name}</TableCell>
                <TableCell className="font-sans text-sm ">{d.email}</TableCell>
                <TableCell className="font-sans text-sm ">
                  {d.password}
                </TableCell>
                <TableCell className="font-sans text-sm ">{d.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
};

export default DashboardTable;
