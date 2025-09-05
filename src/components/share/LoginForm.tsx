import { loginWithCredential } from "@/actions/actions";
import { loginWithGithub } from "@/actions/actions";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-8 text-indigo-600 text-2xl font-bold text-center ">
          Login Here!
        </h1>

        <form className="space-y-4" action={loginWithCredential}>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-2"
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-2"
            name="password"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Login
          </button>

          <div className="my-4 text-center text-gray-500">OR</div>
        </form>

        <form action="">
          <button
            type="submit"
            formAction={loginWithGithub}
            className="mb-2 w-full rounded-lg bg-gray-800 p-2 text-white hover:bg-gray-900"
          >
            Continue with GitHub
          </button>
          <button className="w-full rounded-lg bg-red-500 p-2 text-white hover:bg-red-600">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
}
