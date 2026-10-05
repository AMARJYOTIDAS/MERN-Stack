import React from "react";

const HeroSection = () => {
  return (
    <section id="herosection">
      <div
        style={{
          backgroundImage:
            "url(https://www.debsaipl.in/static/media/banara.def3516a5d0993bd196c.png)",
        }}
        className="h-screen bg-cover bg-center "
      >
        <div className="flex flex-col justify-between gap-10 mt-10 px-16 max-w-2xl">
          <h2 className=" text-green-500 text-2xl tracking-wide">
            Welcome to <span className="font-bold">Deb Online </span>Shopping
            Store
          </h2>
          <h1 className=" text-4xl/10 text-black ">
            We Provide <br />
            <span className="font-semibold">Delivery</span> <br /> Within 30 Min
          </h1>
          <p className="text-3xl/10 font-serif py-4 ">
            We offer exceptional delivery service, ensuring your orders arrive
            within 30 minutes directly
          </p>
          <div className=" flex gap-8 items-center">
            <button
              className="cursor-pointer text-gray-800 border-2 rounded-full bg-green-600 w-40 py-4 font-semibold 
          hover:bg-green-300"
            >
              Get Started
            </button>
            <button
              className="cursor-pointer text-gray-800 border-2 rounded-full w-40 py-4 font-semibold
          "
            >
              Order Step
            </button>
          </div>
          <div className=" flex  items-center gap-20 ">
            <div className=" flex flex-col items-center gap-3 ">
              <span className="font-semibold text-4xl text-green-600">
                40 k
              </span>
              <h3>Satisfied Customer</h3>
            </div>
            <div className="flex flex-col  items-center gap-3">
              <span className="font-semibold text-4xl text-green-600">
                45 k
              </span>
              <h3>Ordered Delivered</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
