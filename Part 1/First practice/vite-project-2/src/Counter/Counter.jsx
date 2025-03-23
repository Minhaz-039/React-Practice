import React, { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "white" }}>Count : {count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
