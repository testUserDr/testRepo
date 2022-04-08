import React from "react";

import "./HamburgerMenu.css";

const HamburgerMenu = (props) => {
  return (
    <div className="HamburgerMenu" onClick={props.clicked}>
      <div className="HamburgerMenuItem"></div>
      <div className="HamburgerMenuItem"></div>
      <div className="HamburgerMenuItem"></div>
    </div>
  );
};

export default HamburgerMenu;
