import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";
import HopiumLogo from "../../images/HopiumLogo.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigationContainer" id="navigation">
        <NavLink to={"/"}>
          <img src={HopiumLogo} alt="logo" />
        </NavLink>
        <div className="navMenu">
          <a href="/#about">About Us</a>
          <a href="#pricing">Pricing</a>
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
