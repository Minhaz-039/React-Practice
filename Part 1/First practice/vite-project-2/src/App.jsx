import React from "react";
import Calculator from "./Calculator/Calculator";
import Counter from "./Counter/Counter";
import Meals from "./Meals/Meals";
import Todo from "./Todo/Todo";
import ToggleBackgroundColor from "./TogglebackgroundColor/ToggleBackgroundColor";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Counter />
      <Todo />
      <Meals />
      <Calculator />
      <ToggleBackgroundColor />
    </div>
  );
};

export default App;
