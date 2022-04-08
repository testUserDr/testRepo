import React from "react";

import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
      <p>
        Current Price: <strong>{props.price}$</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          ingredientAdded={() => props.ingredientAdded(ctrl.type)}
          ingredientRemoved={() => props.ingredientRemoved(ctrl.type)}
          key={ctrl.label}
          label={ctrl.label}
          disabled={props.disabledInfo[ctrl.type]}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
