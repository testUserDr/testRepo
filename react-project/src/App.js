import React, { Component } from "react";
import "./App.css";
import CharComponent from "./Components/CharComponent";
import ValidationComponent from "./Components/ValidationComponent";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "nanadsdafa", name: "Max", age: 28 },
      { id: "rbnwobnwij12g", name: "Manu", age: 29 },
      { id: "rohnj124hoj", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    inputText: "",
    inputTextLength: "",
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id: "nanadsdafa", name: newName, age: 28 },
        { id: "rbnwobnwij12g", name: "Manu", age: 29 },
        { id: "rohnj124hoj", name: "Stephanie", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event, id) => {
    /*   const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons }); */

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  getLengthOfInput = (e) => {
    const text = this.state.inputText;
    this.setState({
      inputText: e.target.value,
    });

    const inputTextLength = text.length;
    this.setState({
      inputTextLength: inputTextLength + 1,
    });
  };

  removeCharHandler = (index) => {
    /*  const char = this.state.inputText.split("").find((_, i) => {
      return i === index;
    });*/
    const text = this.state.inputText.split("");

    text.splice(index, 1);
    this.setState({ inputText: text.join("") });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(e) => this.nameChangedHandler(e, person.id)}
            />
          ))}
          {/*       <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        <input onChange={(e) => this.getLengthOfInput(e)} />
        <ValidationComponent textLength={this.state.inputTextLength} />
        {this.state.inputText.split("").map((t, index) => {
          return (
            <CharComponent
              letter={t}
              key={index}
              removeChar={() => this.removeCharHandler(index)}
            />
          );
        })}

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
