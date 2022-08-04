import React from "react";
import { Link } from "react-router-dom";
import "./othersTerraAliens.css";

import Dashboard from "../../images/Luart.png";
import Earn from "../../images/Croswap.png";

const OthersTerraAliens = () => {
  return (
    <div className="othersTerraAliens">
      <h2>Others Case Studies</h2>
      <div className="othersImages">
        <Link to="/CaseStudies/Croswap">
          <img src={Earn} alt="" />
        </Link>
        <Link to="/CaseStudies/Luart">
          <img src={Dashboard} alt="" />
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default OthersTerraAliens;
