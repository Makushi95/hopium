import React from "react";
import "./dapp.css";
import Luart002a from "../../images/Luart002a.jpg";
import Luart003a from "../../images/Luart003a.png";
import Luart004a from "../../images/Luart004a.png";

const Dapp = () => {
  return (
    <div className="dapp">
      <div className="dappText">
        <h2>Dapp</h2>
        <p>
          Luart is the first gamified NFT platform that will bring a
          seamless, all-in-one experience to the Terra Ecosystem, for
          creators and LUNAtics alike. Providing them benefit not only
          from participating in the expanding universe of Terra NFTs,
          but also as a user of Luart's unique marketplace.
        </p>
      </div>
      <img src={Luart002a} alt="Luart" />
      <img src={Luart003a} alt="Luart" />
      <img src={Luart004a} alt="Luart" />
      <hr />
    </div>
  );
};

export default Dapp;
