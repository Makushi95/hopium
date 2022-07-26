import React from "react";
import BudgetAliens from "../../../components/budgetAliens/BudgetAliens";
import DesignNFTs from "../../../components/designNFTs/DesignNFTs";
import FooterCaseStudies from "../../../components/footerCaseStudies/FooterCaseStudies";
import HeadTerraAliens from "../../../components/headTerraAliens/HeadTerraAliens";
import MarketAnalysis from "../../../components/marketAnalysis/MarketAnalysis";
import Navigation from "../../../components/navigation/Navigation";
import Others from "../../../components/others/Others";
import Rarity from "../../../components/rarity/Rarity";

const terraAliens = () => {
  return (
    <div className="terraAliens">
      <Navigation />
      <HeadTerraAliens />
      <MarketAnalysis />
      <DesignNFTs />
      <Rarity />
      <BudgetAliens />
      <Others />
      <FooterCaseStudies />
    </div>
  );
};

export default terraAliens;
