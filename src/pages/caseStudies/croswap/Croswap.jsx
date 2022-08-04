import React from "react";
import HeadCroswap from "../../../components/headCroswap/HeadCroswap";
import Navigation from "../../../components/navigation/Navigation";
import DappCroswap from "../../../components/dappCroswap/DappCroswap";
import Governance from "../../../components/governance/Governance";
import Staking from "../../../components/staking/Staking";
import Whitepaper from "../../../components/whitepaper/Whitepaper";
import OthersCroswap from "../../../components/othersCroswap/OthersCroswap";
import FooterCaseStudies from "../../../components/footerCaseStudies/FooterCaseStudies";
import BudgetCroswap from "../../../components/budgetCroswap/BudgetCroswap";

const Croswap = () => {
  return (
    <div className="croswap">
      <Navigation />
      <HeadCroswap />
      <DappCroswap />
      <Governance />
      <Staking />
      <Whitepaper />
      <BudgetCroswap />
      <OthersCroswap />
      <FooterCaseStudies />
    </div>
  );
};

export default Croswap;
