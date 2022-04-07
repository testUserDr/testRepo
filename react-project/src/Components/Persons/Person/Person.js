import React, { Component } from "react";

import classes from "./Person.css";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/WithClass";
import PropTypes, { number, string } from "prop-types";

import AuthContext from "../../../context/auth-context";
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElement.current.focus();
  }
  render() {
    console.log(this.context.authenticated);

    return (
      <Aux>
        <AuthContext.Consumer>
          {(context) =>
            context.authenticated ? <p> Authenticated</p> : <p>Please log in</p>
          }
        </AuthContext.Consumer>

        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            /*  ref={(inputEl) => {
              this.inputElement = inputEl;
            }} */
            ref={this.inputElement}
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: string,
  age: number,
};

export default withClass(Person, classes.person);
