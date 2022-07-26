import React from "react";
import "./caseStudies.css";

import Navigation from "../../components/navigation/Navigation";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import Pricing from "../../components/pricing/Pricing";

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <Navigation />
      <h1>Case Studies</h1>
      <hr />
      <Products />
      <Pricing />
      <Footer />
    </div>
  );
};

export default CaseStudies;
