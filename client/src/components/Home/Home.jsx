import React from "react";
import MainContent from "./content/MainContent";
import Testimonial from "./content/Testimonial";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <h1 className="h1">Welcome to our Bus Booking Website!</h1>
      <MainContent />
      <Testimonial />
    </div>
  );
};

export default Home;
