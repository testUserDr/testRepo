import React from "react";
import "./person.css";
const Person = (props) => {
  return (
    <div className="Person">
      <h1 onClick={props.click}>name: {props.name}</h1>
      <h2 onClick={props.click}>age : {props.age}</h2>
      <input type="test" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
