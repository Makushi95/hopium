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
      <Link to={"/"}>
        <button type="button" className="footerbutton">
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
            <Link to={"/"}>
              <p>Showcase</p>
            </Link>
            <Link to={"/"}>
              <p>Get In Touch</p>
            </Link>
          </div>
          <div className="blockRight">
            <p>Twitter</p>
            <p>Linkedin</p>
            <p>Dribble</p>
            <p>Behance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCaseStudies;
