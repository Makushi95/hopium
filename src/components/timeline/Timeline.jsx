import React from "react";
import "./timeline.css";
import timeline from "../../images/JPEG.png";
import Hellcats from "../../images/1 JPEG-1.png";

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="groupText">
        <h2>Overall Timeline</h2>
        <p>
          The entire project time frame, from the persona research to
          testing the entire application or talking to users, took
          about 9 months. For a longer period of time, we conducted
          research / design ux / improve ux.
        </p>
        <img src={timeline} />
      </div>

      <img src={Hellcats} />
    </div>
  );
};

export default Timeline;
