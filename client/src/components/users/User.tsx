const User = () => {
  return (
    <article className="border-b-2 text-gray-400 max-w-md m-auto flex items-center gap-x-5 py-10">
      <div className="w-14 h-14 rounded-full border-2"></div>
      <div>
        <h3 className="font-bold">Arjun Reddy</h3>
        <p className="text-xs text-gray-300 font-bold">Following {200}</p>
      </div>
      <button className="ml-auto bg-pink-400 text-white rounded-md py-2 px-6 font-bold">
        Follow
      </button>
    </article>
  );
};

export default User;
