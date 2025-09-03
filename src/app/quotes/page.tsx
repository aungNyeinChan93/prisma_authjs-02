import QuoteCard from "@/components/share/QuoteCard";
import React from "react";

const QuotesPage = async () => {
  const { quotes } = await fetch(`https://dummyjson.com/quotes`).then((r) =>
    r.json()
  );

  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 ">
        <div className="flex flex-col gap-2 px-10 py-2">
          <section className="p-2 flex justify-between ">
            <p className="text-2xl font-semibold underline underline-offset-8 decoration-green-400">
              Quotes
            </p>
          </section>
          <section className=" flex justify-center items-center my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {quotes &&
                Array.isArray(quotes) &&
                quotes?.map((q) => <QuoteCard key={q.id} quote={q} />)}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;
