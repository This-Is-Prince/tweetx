import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../../app/authstore";
import Header from "../Header";

const Home = () => {
  const { verify, token } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!verify()) {
      navigate("/auth/login");
    }
  }, [token]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
