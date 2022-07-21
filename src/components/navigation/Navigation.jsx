import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import HopiumLogo from "../../images/HopiumLogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to={"/"}>
        <img src={HopiumLogo} alt="logo" />
      </Link>
      <Link to={"/"}>
        <button type="button" className="buttonFilled">
          Get in Touch
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
