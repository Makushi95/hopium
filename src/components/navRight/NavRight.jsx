import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  z-index: 12;

  a:nth-child(1),
  a:nth-child(2),
  a:nth-child(3) {
    color: #fff;
    margin-right: 2em;
    font-family: var(--ff-normal);
    opacity: 58%;
    font-size: 16px;
    line-height: 22px;
    transition: 0.2s;
    padding-block: 24px;
    text-decoration: none;
  }

  a.active {
    opacity: 1;
  }

  @media (max-width: 920px) {
    flex-flow: column nowrap;
    background-color: #111;
    position: fixed;
    transform: ${({ open }) =>
      open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const NavRight = ({ open }) => {
  return (
    <Ul className="navRight" open={open}>
      <NavLink to="/#about">About Us</NavLink>
      <NavLink to="/#pricing">Pricing</NavLink>
      <NavLink to={"/CaseStudies"}>Case Studies</NavLink>
      <NavLink to={"/GetInTouch"}>
        <button type="button">Get in Touch</button>
      </NavLink>
    </Ul>
  );
};

export default NavRight;
