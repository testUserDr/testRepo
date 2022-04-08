import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
class Modal extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }
  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} closeModal={this.props.closeModal} />
        <div
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className="Modal"
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
