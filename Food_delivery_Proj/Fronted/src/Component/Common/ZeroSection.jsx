import React from "react";
// import AboutPage from "../AboutComponent/aboutpage";
import dev from "../../assets/dev.jpeg";
import img from "../../assets/img12.png";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

const ZeroSection = () => {
  return (
    <section id="contact">
      <div className="max-w-full flex justify-between px-10 py-2 mt-10 bg-black text-gray-300 ">
        <div className=" flex flex-col justify-between gap-5 py-3 mt-5 max-w-2xs">
          <img src={dev} alt="dev" className="max-w-20 bg-black" />
          <p className="font-light tracking-tighter ">
            Commercial Production Started And The Company Incorporated On
            February 22, 2003.
          </p>
          <ul className="flex  gap-5 hover:cursor-pointer">
            <li>
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebook size={20} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com › ..." target="_blank">
                <FaInstagramSquare size={20} />
              </a>
            </li>
            <li>
              <FaWhatsappSquare size={20} />
            </li>
          </ul>
        </div>
        <div className=" mt-5 flex flex-col ">
          <h1 className="font-bold mb-4">Quick Links</h1>
          <ul className=" leading-9">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#feedback">
              <li>About</li>
            </a>
            <a href="#service">
              <li>Service</li>
            </a>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="mt-5 flex flex-col  ">
          <h1 className="font-bold mb-4">Policies</h1>
          <ul className="leading-9 hover:cursor-pointer">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation Policy</li>
            <li>Privacy & Pricing Policy</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-between gap-4 max-w-2xs mt-5">
          <h1 className="font-bold mb-4">Contact Info</h1>
          <p>
            Deb Online Shopping Store Plot No-1187, Taradapada, Purohitpur,
            Jagatsinghapur, Odisha, 754294 +91 81445 70016
            debdebasmitagrandbazar@gmail.com
          </p>
          <a
            href="https://play.google.com/store/games?hl=en_IN"
            target="_blank"
          >
            <img src={img} alt="playstore" className="w-40" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ZeroSection;
