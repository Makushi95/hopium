import React from "react";

import Navigation from "../../../components/navigation/Navigation";
import Launchpad from "../../../components/launchpad/Launchpad";
import LuartPlatform from "../../../components/luartPlatform/LuartPlatform";
import Colors from "../../../components/colors/Colors";
import Timeline from "../../../components/timeline/Timeline";
import Workflow from "../../../components/workflow/Workflow";
import Dapp from "../../../components/dapp/Dapp";
import HeadLuart from "../../../components/headLuart/HeadLuart";
import Marketplace from "../../../components/marketplace/Marketplace";
import DesignSystem from "../../../components/designSystem/DesignSystem";
import Others from "../../../components/others/Others";
import BudgetLuart from "../../../components/budgetLuart/BudgetLuart";
import FooterCaseStudies from "../../../components/footerCaseStudies/FooterCaseStudies";

const Luart = () => {
  return (
    <div className="caseStudies">
      <Navigation />
      <HeadLuart />
      <LuartPlatform />
      <Colors />
      <Workflow />
      <Timeline />
      <DesignSystem />
      <Dapp />
      <Marketplace />
      <Launchpad />
      <BudgetLuart />
      <Others />
      <FooterCaseStudies />
    </div>
  );
};

export default Luart;
