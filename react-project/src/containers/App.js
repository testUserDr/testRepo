import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/WithClass";
import Aux from "../hoc/Auxiliary";

import AuthContext from "../context/auth-context";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");

    this.state = {
      persons: [
        { id: "asfa1", name: "Max", age: 28 },
        { id: "vasdf1", name: "Manu", age: 29 },
        { id: "asdf11", name: "Stephanie", age: 26 },
      ],
      otherState: "some other value",
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false,
    };
  }
  componentDidMount() {
    console.log("Component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update");
    return true;
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          deletePersonHandler={this.deletePersonHandler}
          nameChangedHandler={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          Show / hide cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              togglePersonsHandler={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
