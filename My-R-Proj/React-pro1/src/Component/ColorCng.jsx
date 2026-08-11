import React from "react";
import { useState } from "react";

const ColorCng = () => {
  const [color, setColor] = useState("green");
  return (
    <div
      className=" w-full h-screen  duration-200"
      style={{ backgroundColor: color }}
    >
      <div className=" w-2xl h-10  fixed flex flex-wrap justify-center bottom-12 items-center rounded-3xl bg-amber-100 gap-5 ">
        <button
          className="bg-slate-400 rounded-xl w-10 cursor-pointer shadow-2xs border-2 "
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          className="bg-yellow-300 rounded-xl w-10 cursor-pointer"
          onClick={() => setColor("yellow")}
        >
          blue
        </button>
        <button
          className="bg-pink-500 rounded-xl w-10 cursor-pointer"
          onClick={() => setColor("pink")}
        >
          blue
        </button>
      </div>
    </div>
  );
};

export default ColorCng;
