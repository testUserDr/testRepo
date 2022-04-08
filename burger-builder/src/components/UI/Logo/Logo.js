import React from "react";
import LogoImg from "../../../assets/images/burger-logo.png";

import "./Logo.css";

const Logo = (props) => {
  return (
    <div className="Logo">
      <img src={LogoImg} alt="Burger logo" />
    </div>
  );
};

export default Logo;
