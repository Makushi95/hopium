import React from "react";
import "./luartPlatform.css";
import LuartPlatformImg from "../../images/NFTs.png";
import arrowLeft from "../../images/arrowLeft.png";
import arrowMiddle from "../../images/arrowMiddle.png";
import arrowRight from "../../images/arrowRight.png";

const LuartPlatform = () => {
  return (
    <div className="luartPlatform">
      <img src={LuartPlatformImg} />
      <h2>Luart Platform</h2>
      <div className="imgGroup">
        <img src={arrowLeft} />
        <img src={arrowMiddle} />
        <img src={arrowRight} />
      </div>
      <div className="textGroup">
        <div className="textItem-left">
          <h4>Dapp</h4>
          <p>
            You will also find information about the value of the
            prizes that have already been claimed under "Paid Out".
            You can also see the current price of $LUART, token
            supply, and current total liquidity. New features and
            statistics will be added soon.
          </p>
        </div>
        <div className="textItem-middle">
          <h4>Marketplace</h4>
          <p>
            NFT Marketplace is a digital space where people can
            purchase, sell, and exchange NFT-based objects. These
            markets can sell a variety of NFT products. Platform has a
            plan to connect with different gaming projects in the
            metaverse.
          </p>
        </div>
        <div className="textItem-right">
          <h4>NFT Launchpad</h4>
          <p>
            With the NFT Launchpad Development services, the creators
            can raise funds to build NFT projects, launch their NFT
            projects, and market their NFT projects too. These are
            very much like IDO launchpads but cater specifically to
            NFT creators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LuartPlatform;
