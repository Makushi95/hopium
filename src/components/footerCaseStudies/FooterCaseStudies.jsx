import React from "react";
import "./footerCaseStudies.css";
import { Link } from "react-router-dom";
import BudgetArrows from "../budgetArrows/BudgetArrows";

const FooterCaseStudies = () => {
  return (
    <div className="footerCaseStudies">
      <BudgetArrows />
      <h2>
        Get in touch to find out
        <br />
        how we can help.
      </h2>
      <Link to={"/GetInTouch"}>
        <button type="button" className="footerButton">
          Get in Touch
        </button>
      </Link>
      <div className="footerGroup">
        <div className="footerLeft">
          <p>Email</p>
          <a href="/">hello@hopium.studio</a>
          <p>Telegram</p>
          <a href="/">t.me/Barry_UX</a>
        </div>
        <div className="footerRight">
          <div className="blockLeft">
            <Link to={"/"}>
              <p>Homepage</p>
            </Link>
            <Link to={"/CaseStudies"}>
              <p>Case Studies</p>
            </Link>
            <Link to={"/GetInTouch"}>
              <p>Get In Touch</p>
            </Link>
          </div>
          <div className="blockRight">
            <a
              href="https://twitter.com/HOPIUM_Studio"
              target="_blank"
              rel="noopener noreferrer">
              <p>Twitter</p>
            </a>
            <a
              href="https://dribbble.com/MrStepniewski"
              target="_blank"
              rel="noopener noreferrer">
              <p>Dribble</p>
            </a>
            <a
              href="https://www.behance.net/HopiumStudio"
              target="_blank"
              rel="noopener noreferrer">
              <p>Behance</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCaseStudies;
