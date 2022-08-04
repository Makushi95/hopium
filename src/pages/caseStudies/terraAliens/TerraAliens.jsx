import React from "react";
import BudgetAliens from "../../../components/budgetAliens/BudgetAliens";
import DesignNFTs from "../../../components/designNFTs/DesignNFTs";
import FooterCaseStudies from "../../../components/footerCaseStudies/FooterCaseStudies";
import HeadTerraAliens from "../../../components/headTerraAliens/HeadTerraAliens";
import MarketAnalysis from "../../../components/marketAnalysis/MarketAnalysis";
import Navigation from "../../../components/navigation/Navigation";
import OthersTerraAliens from "../../../components/othersTerraAliens/OthersTerraAliens";
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
      <OthersTerraAliens />
      <FooterCaseStudies />
    </div>
  );
};

export default terraAliens;
