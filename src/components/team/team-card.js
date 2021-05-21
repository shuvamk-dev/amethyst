import React from "react";
import "./team-card.css";

function TeamCard({ mem }) {
  return (
    <div className="team-parent">
      <div className="team-card">
        <div className="team-name">{mem.name}</div>
        <div className="team-designation">{mem.designation}</div>
        <img src={mem.image.default} className="team-photo" alt={mem.name} />
        {mem.facebook && (
          <div className="team-icons">
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/facebook-263-721950.png"
              className="team-icon"
              alt="facebook"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/instagram-216-721958.png"
              className="team-icon"
              alt="facebook"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
