const Feed = () => {
  return (
    <article className="shadow-md py-2 px-4 rounded-md grid grid-cols-[auto,_1fr] gap-x-5 text-gray-400">
      <div className="row-span-2 w-14 h-14 border-2 rounded-full"></div>
      <header className="flex justify-between row-span-1 col-span-1">
        <h3>Arjun Reddy</h3>
        <span>10 min ago</span>
      </header>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
        asperiores mollitia harum doloremque atque quasi perspiciatis quaerat
        minus sint similique?
      </p>
    </article>
  );
};

export default Feed;
