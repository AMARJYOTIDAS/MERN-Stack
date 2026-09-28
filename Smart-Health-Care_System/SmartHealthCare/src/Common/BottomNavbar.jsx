import React from "react";
import { Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaGooglePlay,
} from "react-icons/fa";

const BottomNavbar = () => {
  return (
    <div
      className="bg-[#191c1f] px-16 py-2 flex justify-between items-center constant
      fixed top-0 left-0 w-full  shadow-md z-50"
    >
      <div className="flex justify-center items-center gap-2">
        <p className="text-white flex items-center gap-3">
          <span className="text-[#093bd0]">
            <Phone size={20} />
          </span>
          +91 9040313595
        </p>
        <p className="text-white flex items-center gap-3">
          <span className="text-[#093bd0]">
            <Mail size={20} />
          </span>
          amarjyotidas550@gmail.com
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 list-none">
        <li className="text-[#093bd0]">
          <FaGooglePlay />
        </li>
        <li className="text-[#093bd0]">
          <FaFacebook />
        </li>
        <li className="text-[#093bd0]">
          <FaWhatsappSquare />
        </li>
        <li className="text-[#093bd0]">
          <FaInstagramSquare />
        </li>
      </div>
    </div>
  );
};

export default BottomNavbar;
