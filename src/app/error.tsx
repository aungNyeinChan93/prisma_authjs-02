"use client";

import React, { useEffect } from "react";

interface Props {
  error?: Error | null;
  reset?: () => void;
}

const HomeErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    if (error instanceof Error) {
      console.error(error?.message);
    }
  }, [error]);
  return (
    <React.Fragment>
      <main className="w-full h-screen bg-slate-900 p-4 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <p className=" text-2xl text-red-500 tracking-wider font-semibold p-2 ">
            {error && error?.message}
          </p>
          <button
            type="button"
            onClick={reset}
            className="px-4 py-2 rounded-xl bg-indigo-500 text-black"
          >
            Try Again
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default HomeErrorPage;
