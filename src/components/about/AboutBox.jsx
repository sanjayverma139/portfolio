import React from "react";
import { PiCertificateThin } from "react-icons/pi";
import { SiTryhackme } from "react-icons/si";
import { AiOutlineFire } from "react-icons/ai";
import "./about.css";

const AboutBox = () => {
  return (
    <div className="about_boxes ">
      <div className="about_box">
        <AiOutlineFire size={50} />

        <div className="details">
          <h3 className="about_title">
            2 <br />
            Project completed
          </h3>
          {/* <span className="about_subtitle">Project completed</span> */}
        </div>
      </div>

      <div className="about_box">
        <PiCertificateThin size={50} />
        <div className="details">
          <h3 className="about_title">
            7 <br />
            Total Certifications
          </h3>
          {/* <span className="about_subtitle">Total Certifications</span> */}
        </div>
      </div>

      <div className="about_box">
        <SiTryhackme size={50} />

        <div className="details">
          <h3 className="about_title">
            Top 5% <br />
            TryHack Rank
          </h3>
          {/* <span className="about_subtitle ">TryHack Rank</span> */}
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
