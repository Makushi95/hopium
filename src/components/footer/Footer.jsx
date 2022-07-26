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

export default Footer;
