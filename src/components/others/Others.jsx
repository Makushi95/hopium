import React from "react";
import "./others.css";

import Dashboard from "../../images/Luart.png";
import Earn from "../../images/Croswap.png";
import Alien from "../../images/Terra Aliens.png";

const Others = () => {
  return (
    <div className="others">
      <h2>Others Case Studies</h2>
      <div className="othersImages">
        <img src={Earn} alt="" />
        <img src={Dashboard} alt="" />
      </div>
      <hr />
    </div>
  );
};

export default Others;
