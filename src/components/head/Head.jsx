import React from "react";
import "./head.css";
import Dashboard from "../../images/2JPEG.png";
import Leaderboard from "../../images/1 JPEG.png";

const Head = () => {
  return (
    <div className="head">
      <div className="headText">
        <h2>LUART | gamefield MARKETPLACE IN Terra</h2>
        <p>
          Luart is the first gamified NFT Marketplace on the Terra
          Network. Our platform will deliver a seamless experience
          across minting, trading, and earning rewards just for being
          a user.
        </p>
      </div>
      <div className="headContainer">
        <img src={Dashboard} />
        <div className="headGroup">
          <div className="headInfo-container">
            <div className="groupItem">
              <p>Client:</p>
              <p>Luart.io</p>
            </div>
            <div className="groupItem">
              <p>Year:</p>
              <p>2021 — 2022</p>
            </div>
            <div className="groupItem">
              <p>Services</p>
              <p>Branding // UI Design</p>
              <p>UX Analysis // Design System</p>
            </div>
          </div>
          <img src={Leaderboard} />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Head;
