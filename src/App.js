import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Learning About State</h1>
      </header>
      <h2>Current age of my Hero is {count}</h2>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset Hero
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Age
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrease Age
      </button>
    </div>
  );
}

export default App;
