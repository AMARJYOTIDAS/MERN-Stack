import React from "react";
import secondimage from "../Assets/secondimage.jpeg";
import { MoveDown } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";

const DownloadApp = () => {
  return (
    <div className="mx-auto max-w-7xl py-5 mt-20 flex justify-between gap-20">
      <div className=" max-w-2xl flex flex-col  justify-evenly gap-5  items-baseline">
        <h1 className="text-2xl font-bold mt-8 mb-8">
          Download Our <br /> Mobile Apps
        </h1>
        <div className=" bg-black border-2 border-bs-gray-700 w-16 mt-5 mb-5"></div>
        <p className=" font-semibold font-sans gap-y-5 ">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button
          className="mt-8 bg-blue-500 text-white px-8 py-1 rounded-full font-semibold hover:bg-blue-600 transition duration-300
         border-black drop-shadow-fuchsia-800 cursor-pointer flex flex-col items-center"
        >
          <ArrowDownToLine size={20} />
          Download
        </button>
      </div>
      <div className=" max-w-3xl">
        <img
          src={secondimage}
          alt="secondimage"
          className="rounded-2xl shadow-2xl shadow-blue-900"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
