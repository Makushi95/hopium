import React from "react";
import { Link } from "react-router-dom";
import "./othersCroswap.css";

import Dashboard from "../../images/Luart.png";
import Alien from "../../images/Terra Aliens.png";

const OthersCroswap = () => {
  return (
    <div className="othersCroswap">
      <h2>Others Case Studies</h2>
      <div className="othersImages">
        <Link to="/CaseStudies/Luart">
          <img src={Dashboard} alt="" />
        </Link>
        <Link to="/CaseStudies/TerraAliens">
          <img src={Alien} alt="" />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default OthersCroswap;
