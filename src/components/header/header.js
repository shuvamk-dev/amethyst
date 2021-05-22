/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img
        src={logo}
        className="logo"
        style={{
          height: "60px",
        }}
        alt="Logo"
      />

      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleNav}
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/house-1439754-1214326.png"
              style={{
                height: "25px",
              }}
              alt="icon"
            />
            Home
          </Link>
          <Link
            to="/events"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleNav}
          >
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/events-2002870-1687050.png"
              style={{
                height: "25px",
              }}
              alt="icon"
            />
            Events
          </Link>

          <Link
            to="/memoirs"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleNav}
          >
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/camera-photo-image-photography-video-videography-capture-front-side-30441.png"
              style={{
                height: "25px",
              }}
              alt="icon"
            />
            Memoirs
          </Link>
          <Link
            to="/team"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleNav}
          >
            {" "}
            <img
              src="https://cdn.iconscout.com/icon/free/png-128/team-2635272-2187599.png"
              style={{
                height: "25px",
              }}
              alt="icon"
            />
            Team
          </Link>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/menu-1767818-1502398.png"
          style={{
            height: "50px",
          }}
          alt="menu"
        />
      </button>
    </header>
  );
}
