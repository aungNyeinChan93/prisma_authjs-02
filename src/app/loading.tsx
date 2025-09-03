import Loader from "@/components/share/Loader";
import React from "react";

const HomeLoading = async () => {
  return (
    <React.Fragment>
      <main className="min-h-screen flex justify-center items-center">
        <Loader />
      </main>
    </React.Fragment>
  );
};

export default HomeLoading;
