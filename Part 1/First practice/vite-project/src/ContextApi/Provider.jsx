import React, { createContext } from "react";
import Consumer1 from "./Consumer1";

export const Data1 = createContext();
export const Data2 = createContext();

const Provider = () => {
  const student = {
    name: "Minhaz",
    age: 23,
  };
  const student2 = {
    name: "Hasnain",
    age: 24,
  };

  return (
    <div>
      <Data1.Provider value={student}>
        <Data2.Provider value={student2}>
          <h1>Provider</h1>
          <Consumer1 />
        </Data2.Provider>
      </Data1.Provider>
    </div>
  );
};

export default Provider;
