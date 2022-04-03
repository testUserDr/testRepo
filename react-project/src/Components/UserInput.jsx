import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <label htmlFor="input">{props.label}</label>
      <input onChange={props.inputChange} value={props.value} />
    </div>
  );
};

export default UserInput;
