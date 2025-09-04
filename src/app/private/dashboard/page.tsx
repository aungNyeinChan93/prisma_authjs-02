import DashboardComponent from "@/components/share/Dashboard";
import React from "react";

const DashboardPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50">
        <DashboardComponent />
      </main>
    </React.Fragment>
  );
};

export default DashboardPage;
