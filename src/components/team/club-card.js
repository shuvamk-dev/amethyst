import React from "react";
import "./club-card.css";

function ClubCard({ club }) {
  return (
    <div className="club-parent">
      <div className="club-card">
        <div className="club-title">{club.name}</div>
        <img src={club.image} className="club-logo" alt="Logo" />
        <div className="club-icons">
          <img
            src="https://cdn.iconscout.com/icon/free/png-128/facebook-263-721950.png"
            className="club-icon"
            alt="facebook"
          />
          <img
            src="https://cdn.iconscout.com/icon/free/png-128/instagram-216-721958.png"
            className="club-icon"
            alt="facebook"
          />
        </div>
      </div>
    </div>
  );
}

export default ClubCard;
