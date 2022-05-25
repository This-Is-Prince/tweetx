import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/utils/Home";
import SharedLayout from "./components/utils/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
