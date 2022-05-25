import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../app/authstore";

const SharedLayout = () => {
  const { verify } = useAuthStore();
  console.log(verify());
  if (!verify()) {
    return <Navigate to="/auth/login" />;
  } else {
    return <Outlet />;
  }
};

export default SharedLayout;
