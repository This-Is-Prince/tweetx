import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./components/auth";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Feeds from "./components/feeds";
import Profile from "./components/profile";
import Users from "./components/users";
import Home from "./components/utils/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
