import React from "react";
import "./headTerraAliens.css";

import TerraAliensImg2 from "../../images/TerraAliens.png";
import TerraAliensImg1 from "../../images/TerraAliens1.png";

const HeadTerraAliens = () => {
  return (
    <div className="headTerraAliens">
      <div className="headText">
        <h2>Terra Aliens | 2d NFT Collection</h2>
        <p>
          Terra Aliens are the native NFTs in the Terra Ecosystem.
          Invaders raiding the Terraverse & Crypto Twitter. Building a
          Web3 Brand and partnering with the best in the business.
        </p>
      </div>
      <div className="headContainer">
        <img src={TerraAliensImg1} />
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
          <img src={TerraAliensImg2} />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeadTerraAliens;
