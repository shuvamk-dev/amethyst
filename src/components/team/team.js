import React from "react";
import About from "./about";
import Clubs from "./clubs";
import CultCard from "./cult-card";
import Display from "./display";
import "./team.css";

function Team() {
  return (
    <div className="team">
      <CultCard />
      <About />
      <Display />
      <Clubs />
    </div>
  );
}

export default Team;
