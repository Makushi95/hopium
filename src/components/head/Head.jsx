import React from "react";
import "./head.css";
import Analytics from "../../images/LuartAnalitycs.png";

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
        <div className="headGroup groupLeft">
          <p>Client:</p>
          <p>Luart.io</p>
        </div>
        <div className="headGroup groupMiddle">
          <p>Year:</p>
          <p>2021 — 2022</p>
        </div>
        <div className="headGroup groupRight">
          <p>Services</p>
          <p>Branding // UI Design</p>
          <p>UX Analysis // Design System</p>
        </div>
      </div>
      <img src={Analytics} alt="Analytics" />
    </div>
  );
};

export default Head;
