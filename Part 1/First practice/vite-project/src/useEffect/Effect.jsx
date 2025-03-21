import React, { useEffect, useState } from "react";

const Effect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const DATA = await res.json();
      setData(DATA);
    }
    getData();
  }, []);

  return (
    <div>
      {data.map((data) => (
        <ul key={data.id}>
          <li>{data.id}</li>
          <li>{data.name}</li>
          <li>{data.phone}</li>
        </ul>
      ))}
    </div>
  );
};

export default Effect;
