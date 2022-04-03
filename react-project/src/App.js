import React, { useState } from "react";
import "./App.css";
import Person from "./Components/Person";

/* const App = () => {
  const [initialState, setInitialState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });
  const [otherState, setOtherState] = useState("Some other value");
  let switchNameHandler = () => {
    setInitialState({
      persons: [
        { name: "Maxxx", age: 23 },
        { name: "Mannnuuu", age: 32 },
        { name: "Stephanieeee", age: 26 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        age={initialState.persons[0].age}
        name={initialState.persons[0].name}
      />
      <Person
        age={initialState.persons[0].age}
        name={initialState.persons[0].name}
        click={this.switchNameHandler}
      />
      <Person
        age={initialState.persons[0].age}
        name={initialState.persons[0].name}
      />
    </div>
  );
}; */

class App extends React.Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "Some other value",
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: "Mannnuuu", age: 32 },
        { name: "Stephanieeee", age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.currentTarget.value, age: 23 },
        { name: event.currentTarget.value, age: 32 },
        { name: event.currentTarget.value, age: 26 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler.bind(this, "Maximilian")}>
          Switch Name
        </button>
        <Person
          age={this.state.persons[0].age}
          name={this.state.persons[0].name}
        />
        <Person
          age={this.state.persons[1].age}
          name={this.state.persons[1].name}
          click={this.switchNameHandler.bind(this, "maxx")}
          changed={this.nameChangedHandler}
        />
        <Person
          age={this.state.persons[2].age}
          name={this.state.persons[2].name}
        />
      </div>
    );
  }
}

export default App;
