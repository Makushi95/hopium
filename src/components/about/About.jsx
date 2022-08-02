import React from "react";
import { Slider } from "../slider/Slider";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="panels">
        <div className="left panel">
          <p>
            So far, we have helped over 10 projects to bring their
            visuals to the TOP level. <i></i>
            <span className="transparentText">
              From designing the concept through many drafts, own
              upgrades, unique token rarities and ideas, to the final
              version of dApp, document or NFT Collection delivery.
            </span>
          </p>
          <h2>Product Design</h2>
          <h2>UX Analytics</h2>
          <h2>Design NFTs</h2>
        </div>
        <hr className="middleDivider" />
        <div className="right panel">
          <Slider />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
