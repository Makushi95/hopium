import React from "react";
import "./others.css";
import Luart003a from "../../images/Luart003a.png";

const Others = () => {
  return (
    <div className="others">
      <h2>Others Case Studies</h2>
      <div className="othersImages">
        <img src={Luart003a} alt="Luart" />
        <img src={Luart003a} alt="Luart" />
      </div>
      <hr />
    </div>
  );
};

export default Others;
