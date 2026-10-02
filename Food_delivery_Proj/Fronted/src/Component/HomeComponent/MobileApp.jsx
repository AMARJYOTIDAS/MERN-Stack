import React from "react";
import img12 from "../../assets/img12.png";

const MobileApp = () => {
  return (
    <div className="flex justify-between items-center px-10 mt-8">
      <div className="flex flex-col justify-between  bg-white  gap-4 font-sans">
        <h1 className="font-semibold text-2xl py-6">Mobile Apps</h1>
        <h2 className="font-light text-6xl">
          Best Service to fulfil your <br />
          expectations.
        </h2>
        <p className="font-extralight text-4xl">
          Enjoy a user-friendly experience with simple, intuitive interfaces
          designed for everyone.
        </p>
        <a href="https://play.google.com/store/games?hl=en_IN" target="">
          <img src={img12} alt="" className="max-w-3xs hover:cursor-pointer" />
        </a>
      </div>
      <img
        src="https://www.debsaipl.in/static/media/BestService.c0751e90e5b105bbcf4b.png"
        alt="img"
        className="max-w-3xl max-h-fit bg-no-repeat"
      />
    </div>
  );
};

export default MobileApp;
