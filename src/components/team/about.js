import React from "react";
import "./about.css";
import logo from "../../assets/amethyst.jpg";

function About() {
  return (
    <div className="about-parent">
      <div className="about-card">
        <img src={logo} alt="banner" className="about-banner" />
        <div>
          <div className="about-title">ABOUT AMETHYST</div>
          <div className="about-desc">
            Amethyst is AIT’s annual cultural fest, something each AITian looks
            forward to with passion and enthusiasm. Here, talent knows no
            limits, creativity knows no bounds and artists break ceilings every
            time they walk in. It’s been over 25 years and the fest has been
            such a success that even the pandemic couldn’t stop it from
            happening. Embrace yourselves for a memorable experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
