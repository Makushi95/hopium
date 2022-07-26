import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import HopiumLogo from "../../images/HopiumLogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigationContainer">
        <NavLink to={"/"}>
          <img src={HopiumLogo} alt="logo" />
        </NavLink>
        <div className="navMenu">
          <NavLink to={"/AboutUs"}>About Us</NavLink>
          <NavLink to={"/Pricing"}>Pricing</NavLink>
          <NavLink to={"/CaseStudies"}>Case Studies</NavLink>
          <NavLink to={"/GetInTouch"}>
            <button type="button">Get in Touch</button>
          </NavLink>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navigation;
