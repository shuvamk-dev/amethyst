import React from "react";
import Gallery from "./gallery";
import "./memoir.css";

function Memoirs() {
  return (
    <div className="memoirs">
      <div className="memoir-title">
        Flashback to some great memories made...
      </div>
      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default Memoirs;
