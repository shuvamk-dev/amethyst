import React from "react";
import "./content.css";

function Content() {
  return (
    <div className="content">
      <div className="title">Amethyst '21</div>
      <div className="subtitle">
        It's a <span>Mardi Gras</span> Thing
      </div>
      <div className="date">24th May - 26th May 2021</div>
      <div className="prize">
        Prizes worth <span>3.5 Lacs+</span>{" "}
      </div>
      <div className="contact">Contact</div>
    </div>
  );
}

export default Content;
