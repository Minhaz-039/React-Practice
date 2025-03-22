import React, { useContext, useState } from "react";
import { Data3 } from "./Provider2";

const Consumer4 = () => {
  const MainData = useContext(Data3);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const handleTitle = () => {
    MainData[id - 1].title = title;
  };
  return (
    <div>
      <h1>Consumer 4</h1>
      <div>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value))}
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleTitle}>Change the title</button>
      </div>
    </div>
  );
};

export default Consumer4;
