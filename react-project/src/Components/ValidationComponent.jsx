import React from "react";

const ValidationComponent = (props) => {
  if (props.textLength <= 5) {
    return (
      <>
        <p>Text to short</p>
        <p>{props.textLength}</p>
      </>
    );
  } else {
    return (
      <>
        <p>Text long enough</p>
        <p>{props.textLength}</p>
      </>
    );
  }
};

export default ValidationComponent;
