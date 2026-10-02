import React from "react";

const Service = () => {
  return (
    <section id="service">
      <div className="flex flex-col items-center justify-between mt-12 gap-6 font-sans">
        <h1 className="font-bold text-4xl ">What We Provide</h1>
        <p className="max-w-4xl text-2xl text-center">
          Highlights our top services and offerings, showcasing quality,
          innovation, and customer satisfaction to meet your needs.
        </p>
      </div>
      <div className=" flex items-center mt-2 px-7 font-sans gap-6 ">
        <div className="flex flex-col items-center  ">
          <img
            src="src\assets\22bfc64062ff61edb0d7024aa75c9412db5c8587.png"
            alt="Fast Delivery"
          />
          <h1 className="font-semibold text-2xl mb-5">Faster Delivery</h1>
          <p className="text-center font-semibold ">
            Access round-the-clock customer support, always available to assist
            you anytime, day or night.
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="src\assets\5963c54101d7998df1094620cbd7156dd1b63ab4.png"
            alt="24/7 support"
          />
          <h1 className="font-semibold text-2xl mb-5">24/7 Support</h1>
          <p className="text-center font-semibold">
            Get your products swiftly with our efficient, rapid delivery
            service, saving you time.
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <img
            src="src\assets\bf9c61185bd424cef470ecf44dd47428babd75e7.png"
            alt="easy to use"
          />
          <h1 className="font-semibold text-2xl mb-5">Easy To Use</h1>
          <p className="text-center font-semibold">
            Enjoy a user-friendly experience with simple, intuitive interfaces
            designed for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
