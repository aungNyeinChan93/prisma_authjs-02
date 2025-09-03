import RegisterForm from "@/components/share/RegisterForm";
import React from "react";

const RegisterPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full h-screen flex justify-center items-center bg-gray-50">
        <RegisterForm />
      </main>
    </React.Fragment>
  );
};

export default RegisterPage;
