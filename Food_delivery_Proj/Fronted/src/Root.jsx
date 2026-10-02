import React from "react";
import TopNavbar from "./Component/Common/TopNavbar";
import BottomNavbar from "./Component/Common/BottomNavbar";
import BottomZero from "./Component/Common/BottomZero";
import { Outlet } from "react-router-dom";
import HeroSection from "./Component/Common/HeroSection";
import ZeroSection from "./Component/Common/ZeroSection";

function Root() {
  return (
    <>
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <Outlet />
      <ZeroSection />
      <BottomZero />
    </>
  );
}

export default Root;
