import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "./Products";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <Slider />
      <Products />
      <Footer />
    </div>
  );
};

export default Main;
