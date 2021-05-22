import React from "react";

import "./clubs.css";

function Clubs() {
  return (
    <div>
      {/* <div className="quote">
        "A group is a bunch of people in an elevator. A team is a bunch of
        people in an elevator, but the elevator is broken".
      </div> */}
      {/* <div className="club-div">
        {clubData.map((club) => {
          return <ClubCard club={club} />;
        })}
      </div> */}
      <div className="bottom-logos">
        <div className="logo-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/amethyst-demo.appspot.com/o/clubs%2FFine.jpg?alt=media&token=21eddd7f-fd62-421c-a52c-dc8b8b70f8bb"
            className="club-logo-img"
            alt="club"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/amethyst-demo.appspot.com/o/clubs%2FScreenshot%202021-05-21%20at%2022.38.01.png?alt=media&token=31dbb0ef-ad88-48b4-91ba-e789b71d5e58"
            className="club-logo-img"
            alt="club"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://i2.wp.com/www.campustimespune.com/wp-content/uploads/2014/07/AIT-Pune-Logo.png?fit=228%2C191&ssl=1"
            className="club-logo-img"
            alt="club"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/amethyst-demo.appspot.com/o/clubs%2Fddq.jpg?alt=media&token=ebe3d1c1-2039-4c94-a108-a2c26987c0da"
            className="club-logo-img"
            alt="club"
          />
        </div>
        <div className="logo-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/amethyst-demo.appspot.com/o/clubs%2Fefgh.jpg?alt=media&token=0af2b5e7-4bb3-433f-aceb-aa3abda468e6"
            className="club-logo-img"
            alt="club"
          />
        </div>
      </div>
    </div>
  );
}

export default Clubs;
