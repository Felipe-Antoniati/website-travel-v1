import React from "react";
import "../styles/global.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Landing() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Landing;
