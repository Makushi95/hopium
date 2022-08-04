import React from "react";
import { Link } from "react-router-dom";
import "./othersLuart.css";

import Earn from "../../images/Croswap.png";
import Alien from "../../images/Terra Aliens.png";

const OthersLuart = () => {
  return (
    <div className="othersLuart">
      <h2>Others Case Studies</h2>
      <div className="othersImages">
        <Link to="/CaseStudies/TerraAliens">
          <img src={Alien} alt="" />
        </Link>
        <Link to="/CaseStudies/Croswap">
          <img src={Earn} alt="" />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default OthersLuart;
