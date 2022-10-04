import React from "react";
import { HashLink } from "react-router-hash-link";
import "./navigation.css";
import styled from "styled-components";
import HopiumLogo from "../../images/HopiumLogo.png";
import Burger from "../burger/Burger";

const Nav = styled.nav`
  width: 100%;
  z-index: 10;
  margin: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  font-size: 16px;
  line-height: 24px;

  .logo {
    width: 169px;
    height: 21px;
    opacity: 0.8;
    z-index: 11;
  }

  @media only screen and (max-width: 920px) {
     {
      padding: 2em 3em;
    }

    .navigation a > button {
      padding: 6px 12px;
      font-size: 16px;
      line-height: 24px;
      cursor: pointer;
    }

    .logo {
      width: 169px;
      height: 21px;
      opacity: 0.8;
      z-index: 11;
    }
  }
`;

const Navigation = () => {
  return (
    <div className="navigation">
      <Nav>
        <HashLink to={"/#hello"}>
          <img className="logo" src={HopiumLogo} alt="logo" />
        </HashLink>
        <Burger />
      </Nav>
      <hr />
    </div>
  );
};

export default Navigation;
