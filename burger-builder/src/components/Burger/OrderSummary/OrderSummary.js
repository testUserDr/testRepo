import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
  componentDidUpdate() {
    console.log("[Order Summary] ComponentDidUptade");
  }

  render() {
    let ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {this.props.ingredients[igKey]}
      </li>
    ));
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Delicious burger with the following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>TotalPrice : {this.props.totalPrice} $</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchasedCancel} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={this.props.purchasedContinue} btnType="Success">
          Continue
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
