import React, { createContext, useEffect, useState } from "react";
import Consumer3 from "./Consumer3";
import Consumer4 from "./Consumer4";

export const Data3 = createContext();

const Provider2 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <Data3.Provider value={data}>
        <h1>Provider2</h1>
        <Consumer3 />
        <Consumer4 />
      </Data3.Provider>
    </div>
  );
};

export default Provider2;
