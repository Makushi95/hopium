import React from "react";
import "./intro.css";

import Reflex from "../../images/Ellipse.png";

const Intro = () => {
  return (
    <div className="intro">
      <img src={Reflex} className="reflexImg" alt="" />
      <h1>2D & 3D NFT design style & Intuitive DApps.</h1>
      <h2>
        World-class applications with outstanding visuals. Designing
        real products, solving real problems. Fastly, honestly, with
        day-to-day contact.
      </h2>
      <hr />
    </div>
  );
};

export default Intro;
