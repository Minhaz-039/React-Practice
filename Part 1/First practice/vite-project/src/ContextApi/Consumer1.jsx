import React, { useContext } from "react";
import Consumer2 from "./Consumer2";
import { Data1, Data2 } from "./Provider";

const Consumer1 = () => {
  const student = useContext(Data1);
  const student2 = useContext(Data2);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <div>
        <h1>Consumer1</h1>
        <h3>
          Name: {student.name}, Age: {student.age}
        </h3>
        <h3>
          Name: {student2.name}, Age: {student2.age}
        </h3>
        <Consumer2></Consumer2>
      </div>
    </div>
  );
};

export default Consumer1;
