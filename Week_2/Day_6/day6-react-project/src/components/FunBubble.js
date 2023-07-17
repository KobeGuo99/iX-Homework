import React, { useState, useEffect } from "react";
import "./FunBubble.css";

export default function FunBubble() {
  const [count, setCount] = useState(0);
  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isNightMode ? "#282c34" : "#ffffff";
  }, [isNightMode]);

  return (
    <div
      className={`fun-bubble text-center m-4 py-3 ${
        isNightMode ? "night-mode" : ""
      }`}
    >
      <h1>Fun Zone</h1>
      <p>Count: {count}</p>
      <button
        className="btn btn-success m-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="btn btn-warning m-2"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button className="btn btn-danger m-2" onClick={() => setCount(0)}>
        Reset
      </button>
      <button
        className="btn btn-info m-2 switch-button"
        onClick={() => setIsNightMode(!isNightMode)}
      >
        Switch to {isNightMode ? "Day" : "Night"} Mode
      </button>
    </div>
  );
}
