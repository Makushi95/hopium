import React from "react";
import "./headCroswap.css";

import CroswapImg1 from "../../images/Croswap2.png";
import CroswapImg2 from "../../images/Croswap1.png";

const HeadCroswap = () => {
  return (
    <div className="headCroswap">
      <div className="headText">
        <h2>CROSWAP | LAUNCHPAD FOR CRO</h2>
        <p>
          CroSwap is the AMM on the Cronos chain, taking a 0.3% fee
          from each trade. Designers of the DHO (Diamond Hands
          Offering) model, helping investors to get early access to
          new projects on Cronos.
        </p>
      </div>
      <div className="headContainer">
        <img src={CroswapImg1} />
        <div className="headGroup">
          <div className="headInfo-container">
            <div className="groupItem">
              <p>Client:</p>
              <p>Terra Aliens</p>
            </div>
            <div className="groupItem">
              <p>Year:</p>
              <p>2022</p>
            </div>
            <div className="groupItem">
              <p>Services</p>
              <p>2D NFT Collection</p>
            </div>
          </div>
          <img src={CroswapImg2} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeadCroswap;
