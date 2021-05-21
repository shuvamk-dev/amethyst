import React from "react";
import "./cult-card.css";

function CultCard() {
  return (
    <div className="cult-card">
      <img
        src="https://scontent.fpat2-2.fna.fbcdn.net/v/t1.6435-9/118441079_1815843471892008_4102278576907656652_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=825194&_nc_ohc=uYy1dRo2sPMAX-ZRVRL&_nc_ht=scontent.fpat2-2.fna&oh=2bfb9477f21268358e5a225e7dde706d&oe=60CB9FA4"
        alt="banner"
        className="cult-banner"
      />
      <div>
        <div className="cult-title">AIT CULTURAL BOARD</div>
        <div className="cult-desc">
          The men and women behind the lens, we have put our best out on the
          table to make sure our participants and guests have a blast. With
          great hope and positive vibes, we welcome you to the event which is
          the soul of what we do best.
        </div>
      </div>
    </div>
  );
}

export default CultCard;
