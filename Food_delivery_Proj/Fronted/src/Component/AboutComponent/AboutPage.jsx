import React from "react";
import TopNavbar from "../Common/TopNavbar";
import BottomNavbar from "../Common/BottomNavbar";
import ZeroSection from "../HomeComponent/ZeroSection";
const AboutPage = () => {
  return (
    <div id="aboutpage">
      <TopNavbar />
      <BottomNavbar />
      <div className="">
        <h1>Look The About Page</h1>
        <p>
          ## About Us Welcome to our food delivery platform, where delicious
          food is just a few clicks away. Our goal is to make ordering food
          simple, fast, and convenient by connecting customers with their
          favorite restaurants and meals in one place. From quick snacks to full
          meals, users can explore a wide variety of dishes, view menus, add
          their favorite items to the cart, and place orders easily. We focus on
          providing a smooth and user-friendly experience from browsing to
          delivery. Our platform is built with modern web technologies to
          deliver a responsive, reliable, and enjoyable experience across
          devices. Whether you're at home, at work, or on the go, we make it
          easier to discover great food and get it delivered to your doorstep.
          **Good food. Easy ordering. Happy customers.**
        </p>
      </div>
      <ZeroSection />
    </div>
  );
};

export default AboutPage;
