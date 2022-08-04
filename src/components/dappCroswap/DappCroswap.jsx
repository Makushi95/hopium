import React from "react";
import "./dappCroswap.css";

import CroswapImg1 from "../../images/Croswap001a.png";
import CroswapImg2 from "../../images/Croswap001b.jpg";

const DappCroswap = () => {
  return (
    <div className="dappCroswap">
      <div className="headText">
        <h2>Dapp</h2>
        <p>
          First things first - CroSwap contacted us to design the
          whole DApp for their users. After multiple discussions about
          their preferences, receiving the fonts and visual
          assumptions, we created 5 essential sections in the token
          panel.
        </p>
        <p>
          Hopium designed the tabs for IDO (Initial DEX Offering),
          getting an allocation, user dashboard (with statistics),
          governance (for voting on strategic proposals), buying $CROS
          tokens, and completing the KYC verification. With that,
          CroSwap could bring their project to life and start
          gathering funding.
        </p>
        <div className="groupImg">
          <img src={CroswapImg2} alt="" />
          <img src={CroswapImg1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DappCroswap;
