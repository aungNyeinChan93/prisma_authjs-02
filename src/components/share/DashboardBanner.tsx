import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";

const DashboardBanner = () => {
  return (
    <React.Fragment>
      <section>
        <div className="flex justify-center px-1 mt-3 space-x-2">
          <Card className="">
            <CardHeader className="flex justify-between items-center px-6">
              <CardTitle>This is title</CardTitle>
              <CardAction>✅</CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
                deserunt tenetur.
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="flex justify-between items-center px-6">
              <CardTitle>This is title</CardTitle>
              <CardAction>✅</CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
                deserunt tenetur.
              </p>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="flex justify-between items-center px-6">
              <CardTitle>This is title</CardTitle>
              <CardAction>✅</CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
                deserunt tenetur.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex justify-between items-center px-6">
              <CardTitle>This is title</CardTitle>
              <CardAction>✅</CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aut
                deserunt tenetur.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DashboardBanner;
