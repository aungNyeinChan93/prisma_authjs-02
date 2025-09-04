import React from "react";
import DashboardBanner from "./DashboardBanner";
import DashboardTable from "./DashboardTable";

const DashboardComponent = () => {
  return (
    <React.Fragment>
      <div className=" flex flex-col gap-2">
        <h3 className="px-4 text-2xl text-slate-600 font-bold mt-4 tracking-wider underline underline-offset-8 decoration-indigo-400">
          Dashboard
        </h3>
        <DashboardBanner />
        <DashboardTable />
      </div>
    </React.Fragment>
  );
};

export default DashboardComponent;
