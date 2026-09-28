import React from "react";
import ceo from "../Assets/ceo.png";
import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";

const FeedBack = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 mt-15 bg-blue-600 rounded-4xl mb-10">
      <h1 className="text-2xl font-semibold text-gray-50 mt-8 mb-8 items-center justify-center text-center">
        What our customer are saying
      </h1>
      <div className="bg-white border-b-2 border-white w-46  mx-auto"></div>
      <div className=" flex flex-row items-center justify-between ml-18 gap-8 mt-15 px-7">
        <div className=" py-0">
          <img src={ceo} alt="ceo" className=" h-24 w-24  mt-4 rounded-full" />
        </div>

        <div className=" flex flex-1 flex-col items-center justify-center text-white">
          <h3>Edward Newgate</h3>
          <h3>Founder Circle</h3>
        </div>
        <p className="text-center italic font-sans text-lg max-w-3xl text-shadow-indigo-50 text-white">
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </p>
      </div>
      <div className=" flex items-center gap-15 text-3xl text-white  w-46 mx-auto mt-8">
        <button className=" cursor-pointer ">
          <MoveLeft size={25} />
        </button>
        <button className="cursor-pointer">
          <MoveRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default FeedBack;
