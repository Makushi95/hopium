import React from "react";
import "./navigation.css";
import Hopium from "../../images/Hopium.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={Hopium} alt="logo" />
      <button type="button" className="buttonFilled">
        Get in Touch
      </button>
    </div>
  );
};

export default Navigation;
