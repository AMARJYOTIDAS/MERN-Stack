import React from "react";

const Subscribe = () => {
  return (
    <div
      className="flex flex-col items-center justify-between gap-5 py-2 mt-15 shadow-2xl shadow-zinc-950
       transition-all duration-200 scrollbar-track-orange-500"
    >
      <h1 className="font-light text-5xl ">Subscribe to Our Newsletter</h1>
      <p className="text-center w-3xl font-medium py-5">
        Subscribe to our newsletter and stay updated with the latest news,
        exclusive offers,
        <br /> and insights. Be the first to know about exciting updates and
        trends!
      </p>
      <div className="flex justify-between items-center shadow-2xl shadow-zinc-950 mb-10 px-2 h-20 rounded-2xl">
        <input
          type="email"
          placeholder="enter email"
          name="email"
          className="w-3xs px-3  border-2 border-mist-300 cursor-pointer"
        ></input>
        <button
          type="submit"
          className="bg-green-600 w-40 h-10 rounded-2xl cursor-pointer hover:bg-green-900 text-2xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
