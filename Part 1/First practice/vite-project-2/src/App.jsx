import React from "react";
import Accordian from "./Accordian/Accordian";
import Calculator from "./Calculator/Calculator";
import Counter from "./Counter/Counter";
import HiddenSearchBar from "./HiddenSearchBar/HiddenSearchBar";
import Meals from "./Meals/Meals";
import Testimonial from "./Testimonial/Testimonial";
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
      <HiddenSearchBar />
      <Testimonial />
      <Accordian />
    </div>
  );
};

export default App;
