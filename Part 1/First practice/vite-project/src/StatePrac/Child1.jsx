import React from "react";

const Child1 = ({ count, onClickHandler }) => {
  const handler = () => {
    onClickHandler();
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handler}>Increment</button>
    </div>
  );
};

export default Child1;
