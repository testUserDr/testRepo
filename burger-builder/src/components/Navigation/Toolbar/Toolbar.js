import React from "react";
import Logo from "../../UI/Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import HamburgerMenu from "../../UI/HamburgerMenu/HamburgerMenu";
const Toolbar = (props) => (
  <header className="Toolbar">
    <HamburgerMenu clicked={props.clicked} />
    <div className="Logo">
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
