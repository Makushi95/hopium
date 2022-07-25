import React from "react";
import "./designSystem.css";
import Design from "../../images/1 JPEG-2.png";

const DesignSystem = () => {
  return (
    <div className="designSystem">
      <div className="groupText">
        <h2>Design System</h2>
        <p>
          When building the company, you must choose a unique design
          system (a single source of truth that groups all the
          elements you will identify with). It's a set of unified
          standards to manage the design that is needed to build the
          brand-awareness, consistency and common language of the
          communication. Of course, a great product is also required,
          but there is no way forward without outstanding visuals.
        </p>
        <p>
          For the Luart project, we designed a comprehensive palette
          of brand colors, fonts, icons, and shapes that helped them
          to gather almost 100k followers on all SM channels. In
          addition, we designed over +5,000 components (e.g Inputs /
          Buttons / Filters) for all three applications so that the
          user always knows that he is on the LUART platform.
        </p>
      </div>
      <img src={Design} />
      <hr />
    </div>
  );
};

export default DesignSystem;
