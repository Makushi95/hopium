import React from "react";
import "./marketplace.css";
import MarketplaceImg from "../../images/Marketplace.png";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <div className="groupText">
        <h2>NFT Marketplace</h2>
        <p>
          NFT Marketplace is the web2 platform with web3 features
          where NFT degens can buy & sell the tokenized visuals. The
          most famous examples are OpenSea for Ethereum NFTs and Tofu
          for multichain NFTs. At the time, the Marketplace for the
          Terra blockchain did not exist.
        </p>
        <p>
          For Luart, we built an instinctive Marketplace (that btw.
          became the largest Marketplace on the Terra network), with
          additional elements of rewarding users with LUA Power and
          showing the newest & trending collections. During the
          project's operation, more than 50k NFTs were minted.{" "}
        </p>
      </div>
      <img src={MarketplaceImg} alt="Luart" />
      {/* <hr /> */}
    </div>
  );
};

export default Marketplace;
