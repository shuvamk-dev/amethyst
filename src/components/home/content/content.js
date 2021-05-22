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
      <div className="contact">
        <div className="home-register">
          <a
            href="https://hij8lgvvmue.typeform.com/to/utPDgrTb"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register
          </a>
        </div>
        <div className="icon-div">
          <a
            href="https://www.facebook.com/amethystfestival/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/facebook-263-721950.png"
              className="contact-icon"
              alt="facebook"
            />
          </a>
        </div>
        <div className="icon-div">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/amethyst_2k21/"
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/instagram-216-721958.png"
              className="contact-icon"
              alt="facebook"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
