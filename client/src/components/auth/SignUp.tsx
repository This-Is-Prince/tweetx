import { Link } from "react-router-dom";
import Logo from "../utils/Logo";

const SignUp = () => {
  return (
    <article className="flex flex-col gap-y-20 pl-20 pt-10">
      <header className="flex flex-col gap-y-5 items-start">
        <Logo />
        <Link
          to="/login"
          className="py-2 px-6 border-2 rounded-xl font-bold text-sm border-gray-400 text-gray-600"
        >
          Login
        </Link>
      </header>
      <div>
        <h2 className="font-bold text-3xl text-gray-600">Create Account</h2>
        <form
          className="mt-10 flex flex-col gap-y-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="bg-gray-100 text-gray-600 py-3 px-6 rounded-md outline-none"
            type="email"
            placeholder="Name"
          />
          <input
            className="bg-gray-100 text-gray-600 py-3 px-6 rounded-md outline-none"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-100 text-gray-600 py-3 px-6 rounded-md outline-none"
            type="password"
            placeholder="Password"
          />
          <input
            className="bg-gray-100 text-gray-600 py-3 px-6 rounded-md outline-none"
            type="password"
            placeholder="Confirm Password"
          />
          <div className="flex justify-end items-center">
            <button
              className="bg-pink-400 px-6 py-2 rounded-md text-white font-bold"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default SignUp;
