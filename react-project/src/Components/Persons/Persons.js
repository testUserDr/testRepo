import React, { PureComponent } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";
class Persons extends PureComponent {
  /*   static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  } */

  /*   shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.deletePersonHandler !== this.props.deletePersonHandler ||
      nextProps.nameChangedHandler !== this.props.nameChangedHandler
    ) {
      return true;
    } else {
      return false;
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotFromUpdate");
    return null;
  } */

  componentWillUnmount() {
    console.log("[Persons.js] ComponentWillUnmount");
  }
  componentDidUpdate(prevProps, prebState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            click={() => this.props.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={(event) => this.props.nameChangedHandler(event, person.id)}
            isAuth={this.props.isAuthenticated}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
