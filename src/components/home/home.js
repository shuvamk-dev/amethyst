import React from "react";
import "./home.css";
import banner from "../../assets/logo.png";
import Content from "./content/content";
function Home() {
  return (
    <div className="home">
      <div className="main">
        <div>
          <img src={banner} alt="Home Banner" className="banner" />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Home;
