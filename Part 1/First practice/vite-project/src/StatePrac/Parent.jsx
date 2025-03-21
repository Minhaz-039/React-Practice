import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child1 count={count} onClickHandler={() => setCount(count + 1)}></Child1>
      <Child2 count={count} onClickHandler={() => setCount(count + 1)}></Child2>
    </div>
  );
};

export default Parent;
