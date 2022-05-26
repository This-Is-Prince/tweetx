import { NavLink } from "react-router-dom";
import Logo from "./utils/Logo";

const Header = () => {
  return (
    <header className="py-4 px-40 m-auto flex items-center justify-between shadow-md">
      <Logo />
      <nav className="flex gap-x-10 text-gray-300 font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
          to="/feeds"
        >
          Feed
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "text-pink-500" : "")}
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
