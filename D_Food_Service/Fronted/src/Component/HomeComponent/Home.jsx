import React from "react";
import TopNavbar from "../Common/TopNavbar";
import BottomNavbar from "../Common/BottomNavbar";
import FoodGrocery from "./FoodGrocery";
import Starter from "./Starter";
import Service from "./Service";
import Lookatour_num from "./Lookatour_num";
import MobileApp from "./MobileApp";
import Aboutus from "../AboutComponent/Aboutus";
import Feedback from "./Feedback ";
import Subscribe from "./Subscribe";
import ZeroSection from "../Common/ZeroSection";
import BottomZero from "../Common/BottomZero";

const Home = () => {
  return (
    <div>
      <TopNavbar />
      <BottomNavbar />
      <HeroSection />
      <FoodGrocery />
      <Starter />
      <Service />
      <Lookatour_num />
      <MobileApp />
      <Aboutus />
      <Feedback />
      <Subscribe />
      <ZeroSection />
      <BottomZero />
    </div>
  );
};

export default Home;
