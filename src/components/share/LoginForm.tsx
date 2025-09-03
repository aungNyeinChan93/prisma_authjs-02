"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCredentialsSignup = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-8 text-indigo-600 text-2xl font-bold text-center ">
          Login Here!
        </h1>

        {/* Email + Password */}
        <form onSubmit={handleCredentialsSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border p-2"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-500">OR</div>

        {/* Social logins */}
        <button
          //   onClick={() => signIn("github", { callbackUrl: "/" })}
          className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
        >
          Continue with GitHub
        </button>
        <button
          //   onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
