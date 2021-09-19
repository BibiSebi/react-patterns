import React from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter>
        <Counter.Label>Counter</Counter.Label>
        <Counter.ButtonWrapper>
          <Counter.Increment></Counter.Increment>
          <Counter.Decrement></Counter.Decrement>
        </Counter.ButtonWrapper>
      </Counter>
    </div>
  );
}

export default App;
