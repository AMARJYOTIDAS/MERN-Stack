import React from "react";
import img13 from "../../assets/img13.png";

const Aboutus = () => {
  return (
    <section id="about">
      <div className=" flex flex-col justify-between items-center gap-3 font-sans">
        <img src={img13} alt="" className=" rounded-4xl " />
        {/* <img
          src="https://www.debsaipl.in/static/media/food.af1d5305eccbdb1454c5.png"
          alt=""
        />
        <img
          src="https://www.debsaipl.in/static/media/delivery.d4a37197ac1d532642b5.png"
          alt=""
        /> */}
        <h1 className="font-bold text-3xl mt-4">What Customers Say About us</h1>
        <p className="max-w-4xl text-center font-light text-2xl text-black mt-4 mb-4">
          "What Customers Say About Us" reflects genuine feedback, highlighting
          our commitment to excellence, reliable service, and customer
          satisfaction through testimonials from those who trust and value our
          solutions.
        </p>
      </div>
    </section>
  );
};

export default Aboutus;
