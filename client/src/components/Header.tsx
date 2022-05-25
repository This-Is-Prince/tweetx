import Logo from "./utils/Logo";

const Header = () => {
  return (
    <header className="py-4 px-40 m-auto flex items-center justify-between shadow-md">
      <Logo />
      <nav className="flex gap-x-10 text-gray-300 font-bold">
        <a className={``} href="#">
          Feed
        </a>
        <a className={`text-pink-400`} href="#">
          Users
        </a>
        <a className={``} href="#">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Header;
