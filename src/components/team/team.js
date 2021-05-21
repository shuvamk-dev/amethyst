import React from "react";
import About from "./about";
import CultCard from "./cult-card";
import "./team.css";

function Team() {
  return (
    <div className="team">
      <CultCard />
      <About />
    </div>
  );
}

export default Team;
