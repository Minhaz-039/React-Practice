import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
