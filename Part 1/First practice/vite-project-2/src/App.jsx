import React from "react";
import Counter from "./Counter/Counter";
import Todo from "./Todo/Todo";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
