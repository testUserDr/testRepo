import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person";

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
        />
      </div>
    );
  }
}

export default App;
