import Feed from "./Feed";

const Feeds = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-y-10">
      <div className="max-w-md w-full">
        <button className="bg-pink-500 py-2 px-8 text-white font-bold rounded-md">
          Write
        </button>
      </div>
      <div className="max-w-md w-full flex flex-col gap-y-10">
        <Feed />
        <Feed />
        <Feed />
      </div>
    </section>
  );
};

export default Feeds;
