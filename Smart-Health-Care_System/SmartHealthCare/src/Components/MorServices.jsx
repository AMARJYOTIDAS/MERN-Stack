import React from "react";
import firstimage from "../Assets/firstimage.jpeg";
const MorServices = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 flex items-center justify-between gap-20">
      <div className="">
        <img
          src={firstimage}
          alt="firstimage"
          className="rounded-2xl shadow-2xl shadow-blue-900"
        />
      </div>
      <div className=" flex flex-col  justify-between gap-5  items-baseline">
        <h1 className="text-4xl font-bold text-gray-900  items-center">
          {" "}
          Leading HealthCare
          <br />
          Provider
        </h1>
        <div className=" bg-black border-2 border-bs-gray-700 w-16 mt-8 mb-5"></div>
        <div className=" font-semibold bg-blue-100 text-gray-900 px-4 py-5 rounded-l-sm w-2xl">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </div>
        <button className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-200  border-b-blue-500 border-black cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default MorServices;
