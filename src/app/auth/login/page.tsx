import LoginForm from "@/components/share/LoginForm";
import React from "react";

const LoginPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center bg-green-50">
        <LoginForm />
      </main>
    </React.Fragment>
  );
};

export default LoginPage;
