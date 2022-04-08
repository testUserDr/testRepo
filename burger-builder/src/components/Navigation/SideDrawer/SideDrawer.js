import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary";

const SideDrawer = (props) => {
  // ...
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Aux>
      <BackDrop show={props.open} closeModal={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <Logo />

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
