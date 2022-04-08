import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div className={"Button " + props.btnType} onClick={props.clicked}>
      {props.children}
    </div>
  );
};

export default Button;
