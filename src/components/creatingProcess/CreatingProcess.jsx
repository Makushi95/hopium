import React from "react";
import "./creatingProcess.css";
import NFTs from "../../images/1 JPEG-3.png";
import DashedLine from "../../images/DashedLine.png";

const CreatingProcess = () => {
  return (
    <div className="creatingProcess">
      <div className="groupText">
        <h2>Creating Process</h2>
        <p>
          Step by step process of creating a template to the finishd
          final product and active aplication.
        </p>
      </div>
      <div className="creatingProcess-groupTop">
        <div className="creatingProcess-item itemLeft">
          <h4>1. UX Research</h4>
          <p>
            We did research to examine the persona and check what
            habits the user faces when using the NFT Marketplace. I
            got into the client's shoes using other NFT Marketplaces /
            NFT Launchpads that are in the general Blockchain market.
          </p>
        </div>
        <div className="creatingProcess-item itemMiddle">
          <h4>3. Design System</h4>
          <p>
            The Design System I created was used in three applications
            (dApp, NFT Marketplace and NFT Launchpad). The system had
            over +5,000 components with variants. In addition, the
            typography architecture and color palette.
          </p>
        </div>
        <div className="creatingProcess-item itemRight">
          <h4>5. UX Analytics</h4>
          <p>
            Hopium Studio worked closely with a Senior React Developer
            who was responsible for the front-end of all applications.
            We performed tests on macOS and iOS. The Loom and
            CleanShot applications were useful for recording the
            screen, which made our cooperation much easier.
          </p>
        </div>
      </div>
      <img src={DashedLine} />
      <div className="creatingProcess-groupBottom">
        <div className="creatingProcess-item itemLeft">
          <h4>2. Wireframe</h4>
          <p>
            Hopium Studio made the first main dApp and NFT Marketplace
            screens to check how we can design the information
            architecture. Due to a lot of data that we had to use in
            dApp, we first had to start with the sketches themselves
          </p>
        </div>
        <div className="creatingProcess-item itemMiddle">
          <h4>4. UX&UI Design</h4>
          <p>
            We designed all three platforms using Figma. In total, the
            applications had over +350 screens. I also designed flow
            so that developers could quickly implement the entire
            Design that I prepared.
          </p>
        </div>
        <div className="creatingProcess-item itemRight">
          <h4>6. Testing</h4>
          <p>
            After the implementation on LIVE, together with our user,
            we often talked on our Twitter about what we could
            improve. We spoke to the community to fix their issues and
            add new features. We also used interviews that were
            helpful.
          </p>
        </div>
      </div>
      <img src={NFTs} />
    </div>
  );
};

export default CreatingProcess;
