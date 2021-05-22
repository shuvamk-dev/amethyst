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
            <a href={mem.facebook} target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/facebook-263-721950.png"
                className="team-icon"
                alt="facebook"
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href={mem.insta}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-128/instagram-216-721958.png"
                className="team-icon"
                alt="facebook"
              />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamCard;
