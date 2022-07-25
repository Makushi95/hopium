import React from "react";

import Navigation from "../../components/navigation/Navigation";
import Launchpad from "../../components/launchpad/Launchpad";
import LuartPlatform from "../../components/luartPlatform/LuartPlatform";
import Colors from "../../components/colors/Colors";
import Timeline from "../../components/timeline/Timeline";
import CreatingProcess from "../../components/creatingProcess/CreatingProcess";
import Dapp from "../../components/dapp/Dapp";
import Head from "../../components/head/Head";
import Marketplace from "../../components/marketplace/Marketplace";
import DesignSystem from "../../components/designSystem/DesignSystem";
import Others from "../../components/others/Others";
import Budget from "../../components/budget/Budget";
import FooterCaseStudies from "../../components/footerCaseStudies/FooterCaseStudies";

const CaseStudies = () => {
  return (
    <div className="caseStudies">
      <Navigation />
      <Head />
      <LuartPlatform />
      <Colors />
      <CreatingProcess />
      <Timeline />
      <DesignSystem />
      <Dapp />
      <Marketplace />
      <Launchpad />
      <Budget />
      <Others />
      <FooterCaseStudies />
    </div>
  );
};

export default CaseStudies;
