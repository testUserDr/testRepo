import logo from "./logo.svg";
import "./App.css";
import Person from "./Components/Person";

function App() {
  return (
    <div className="App">
      <Person age={22} name="John" />
    </div>
  );
}

export default App;
