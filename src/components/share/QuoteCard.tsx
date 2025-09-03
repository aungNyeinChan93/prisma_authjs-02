/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  quote: any;
}

const QuoteCard = ({ quote }: Props) => {
  return (
    <React.Fragment>
      <section className="">
        <Card className="">
          <CardHeader>
            <CardTitle>{quote?.author}</CardTitle>
            <CardDescription className="mt-1">
              {new Date().toLocaleDateString()}
            </CardDescription>
            <CardAction className=" cursor-pointer">❌</CardAction>
          </CardHeader>
          <CardContent>
            <p>{quote?.quote}</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between ">
              <button type="button">⭐⭐⭐⭐</button>
            </div>
          </CardFooter>
        </Card>
      </section>
    </React.Fragment>
  );
};

export default QuoteCard;
