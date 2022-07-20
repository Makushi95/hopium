import React from "react";
import "./homepage.css";

import Title from "../../components/title/Title";
import Intro from "../../components/intro/Intro";
import Products from "../../components/products/Products";
import About from "../../components/about/About";
import Pricing from "../../components/pricing/Pricing";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Title />
      <Intro />
      <Products />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Homepage;
