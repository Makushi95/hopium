import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h2>
        Contact us
        <br />
        and check how we can help you.
      </h2>
      <Link to={"/GetInTouch"}>
        <button type="button">Let's build WEB3 together 🤝</button>
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

export default Footer;
