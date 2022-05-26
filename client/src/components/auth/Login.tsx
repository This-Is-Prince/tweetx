import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../app/authstore";
import Logo from "../utils/Logo";

const Login = () => {
  const { addToken, verify, token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (verify()) {
      navigate("/profile");
    }
  }, [token]);
  return (
    <article className="flex flex-col gap-y-20 pl-20 pt-10">
      <header className="flex flex-col gap-y-5 items-start">
        <Logo />
        <Link
          to="/signup"
          className="py-2 px-6 border-2 rounded-xl font-bold text-sm border-gray-400 text-gray-600"
        >
          Create Account
        </Link>
      </header>
      <div>
        <h2 className="font-bold text-3xl text-gray-600">Login</h2>
        <form
          className="mt-10 flex flex-col gap-y-8"
          onSubmit={(e) => {
            e.preventDefault();
            // 1.Post request to backend for login
            addToken("token");
            navigate("/profile");
          }}
        >
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
          <div className="flex justify-between items-center">
            <a href="#" className="text-gray-600">
              Forget Password ?
            </a>
            <button
              className="bg-pink-400 px-6 py-2 rounded-md text-white font-bold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Login;
