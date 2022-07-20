import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
import Dashboard from "../../images/Luart.png";
import Arrow from "../../images/Vector.png";
import Earn from "../../images/Croswap.png";
import Alien from "../../images/Terra Aliens.png";

const Products = () => {
  return (
    <div className="products">
      <div className="group luart">
        <div className="luartLeft">
          <img
            src={Dashboard}
            alt="dashboard"
            className="dashboardImg"
          />
        </div>
        <hr className="middleDivider" />
        <div className="luartRight">
          <p>Product Design — 2022</p>
          <h2>Luart</h2>
          <p>
            Luart is the first gamified NFT Marketplace on a Terra
            Network. They onboarded over 58k Lunatics in the NFT world
            on Terra. In ~5 months, over 50k NFTs were minted on
            Luart.
          </p>
          <Link to={"/CaseStudies"}>
            <button type="button">
              View Case Study <img src={Arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <div className="group croswap">
        <div className="croswapLeft">
          <p>Product Design — 2022</p>
          <h2>Croswap</h2>
          <p>
            CroSwap is the AMM Decentralized Exchange on the Cronos L1
            blockchain, taking 0.3% fee from each trade. It has been
            developed through a joint venture of builders, made up of
            Crypto.com executives
          </p>
          <Link to={"/CaseStudies"}>
            <button type="button">
              View Case Study <img src={Arrow} alt="arrow" />
            </button>
          </Link>
        </div>
        <hr className="middleDivider" />
        <div className="croswapRight">
          <img src={Earn} alt="earn" className="earnImg" />
        </div>
      </div>
      <hr />
      <div className="group terraAliens">
        <div className="terraAliensLeft">
          <img src={Alien} alt="earn" className="aliensImg" />
        </div>
        <hr className="middleDivider" />
        <div className="terraAliensRight">
          <p>NFT Collection — 2022</p>
          <h2>Terra Aliens</h2>
          <p>
            Terra Aliens are the native NFTs in the Terra Ecosystem.
            Invaders raiding the Terraverse & Crypto Twitter. Building
            a Web3 Brand and partnering with the best in the business.
          </p>
          <button type="button" className="unavailable">
            Coming Soon
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Products;
