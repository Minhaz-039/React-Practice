import React, { useContext } from "react";
import { Data1 } from "./Provider";

const Consumer2 = () => {
  const student1 = useContext(Data1);
  return (
    <div>
      <h1>Consumer2</h1>
      <h3>
        Name: {student1.name}, Age: {student1.age}
      </h3>
    </div>
  );
};

export default Consumer2;
