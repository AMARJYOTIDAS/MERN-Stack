import React from "react";
import BottomNavbar from "../Common/BottomNavbar";
import TopNavbar from "../Common/TopNavbar";
import HeroSection from "./HeroSection";
import OurServices from "./OurService";
import MorServices from "./MorServices";
import DownloadApp from "./DownloadApp";
import FindDisease from "../DoctorComponent/FindDisease";
import Appointment from "../DoctorComponent/Appointment";
import Medicines from "../Common/Medicine";
import FeedBack from "./FeedBack";
import Article from "./Article";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <BottomNavbar />
      <TopNavbar />
      <HeroSection />
      <OurServices />
      <MorServices />
      <DownloadApp />
      <FindDisease />
      <Appointment />
      <Medicines />
      <FeedBack />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
