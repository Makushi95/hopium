import React from "react";
import "./products.css";
import Dashboard from "../../images/Dashboard.png";
import Arrow from "../../images/Vector.png";
import Earn from "../../images/Earn.png";
import Alien from "../../images/Aliens.png";

const Products = () => {
  return (
    <div className="products">
      <div className="group luart">
        <div className="luartLeft">
          <div className="grayBackgroundPanel">
            <img
              src={Dashboard}
              alt="dashboard"
              className="dashboardImg"
            />
          </div>
        </div>
        <hr className="middleDivider" />
        <div className="luartRight">
          <p>Product Design — 2022</p>
          <h2>Luart</h2>
          <p>
            Luart is the first gamified NFT Marketplace on the Terra
            Network. Our platform will deliver a seamless experience
            across minting, trading, and earning rewards just for
            being a user.
          </p>
          <button type="button">
            View Case Study <img src={Arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <hr />
      <div className="group croswap">
        <div className="croswapLeft">
          <p>Product Design — 2022</p>
          <h2>Croswap</h2>
          <p>
            Luart is the first gamified NFT Marketplace on the Terra
            Network. Our platform will deliver a seamless experience
            across minting, trading, and earning rewards just for
            being a user.
          </p>
          <button type="button">
            View Case Study <img src={Arrow} alt="arrow" />
          </button>
        </div>
        <hr className="middleDivider" />
        <div className="croswapRight">
          <div className="grayBackgroundPanel">
            <img src={Earn} alt="earn" className="earnImg" />
          </div>
        </div>
      </div>
      <hr />
      <div className="group terraAliens">
        <div className="terraAliensLeft">
          <div className="grayBackgroundPanel">
            <img src={Alien} alt="earn" className="aliensImg" />
          </div>
        </div>
        <hr className="middleDivider" />
        <div className="terraAliensRight">
          <p>NFT Collection — 2022</p>
          <h2>Terra Aliens</h2>
          <p>
            Luart is the first gamified NFT Marketplace on the Terra
            Network. Our platform will deliver a seamless experience
            across minting, trading, and earning rewards just for
            being a user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
