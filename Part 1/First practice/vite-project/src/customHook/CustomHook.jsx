import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
