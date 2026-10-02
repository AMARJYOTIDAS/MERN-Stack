import React from "react";

const BottomNavbar = () => {
  function scrollBar(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <section id="BottomNavbar">
      <div className="flex justify-between items-center gap-2 px-16 mt-5">
        <div className=" flex justify-center items-center">
          <span>
            <img
              src="https://www.debsaipl.in/static/media/logo.3972d7bb875cfd6b6a8cde6ad1f60c16.svg"
              alt="logo"
            />
          </span>
        </div>
        <nav className="flex justify-center items-center list-none gap-22 text-black font-semibold">
          <ul className="flex justify-center items-center gap-15 text-black font-semibold ">
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out cursor-pointer">
              About
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out cursor-pointer">
              Service
            </li>
            <li className="hover:text-[#2d8014] transition duration-300 ease-in-out cursor-pointer">
              Contact
            </li>
            <li>
              <button
                type="submit"
                className="hover:bg-green-400 bg-green-600  rounded-full px-8 text-center
           cursor-pointer shadow-2xl shadow-green-900"
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BottomNavbar;
