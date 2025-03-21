import React, { useEffect, useState } from "react";

const Prac = () => {
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const [random, setRandom] = useState(Math.floor(Math.random() * 100));
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? savedName : "";
  });
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const changeNum = () => {
    setRandom(Math.floor(Math.random() * 100));
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleClear = () => {
    setName("");
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <h2>Lottery Number : {random}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={changeNum}>Change the random number</button>
      <h1>Tour Name : {name}</h1>
      <input
        type="text"
        placeholder="Change your name"
        value={name}
        onChange={handleNameChange}
      />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default Prac;
