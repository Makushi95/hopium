import React from "react";
import Launchpad from "../../components/launchpad/Launchpad";
import Dapp from "../../components/dapp/Dapp";
import Head from "../../components/head/Head";
import Marketplace from "../../components/marketplace/Marketplace";
import DesignSystem from "../../components/designSystem/DesignSystem";
import Others from "../../components/others/Others";
import Footer from "../../components/footer/Footer";
import Budget from "../../components/budget/Budget";

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <Head />
      <Dapp />
      <Launchpad />
      <Marketplace />
      <DesignSystem />
      <Others />
      <Budget />
      <Footer />
    </div>
  );
};

export default CaseStudies;
