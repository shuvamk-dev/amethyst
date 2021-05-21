import React from "react";
import { Core, Faculty, Secretary } from "../../data/team-data";
import "./display.css";
import TeamCard from "./team-card";

function Display() {
  const coreData = Core;
  const facData = Faculty;
  const secData = Secretary;
  return (
    <div className="display">
      <div className="heads">
        <div className="display-title">Team Heads</div>
        <div className="faculty">
          <TeamCard mem={facData} />
        </div>
        <div className="secretary">
          {secData.map((mem) => {
            return <TeamCard mem={mem} />;
          })}
        </div>
      </div>
      <div className="core">
        <div className="display-title">Core Team</div>
        <div className="core-team">
          {coreData.map((mem) => {
            return (
              <div className="core-card">
                <TeamCard mem={mem} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Display;
