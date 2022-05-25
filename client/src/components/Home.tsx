import Login from "./Login";
import SignUp from "./SignUp";

const Home = () => {
  return (
    <section className="min-h-screen grid grid-cols-[minmax(auto,450px),_1fr]">
      {/* <Login /> */}
      <SignUp />
      <article className="">
        <img
          src="../../assets/bg-login.png"
          className="w-full h-full object-cover object-[-125%]"
          alt=""
        />
      </article>
    </section>
  );
};

export default Home;
