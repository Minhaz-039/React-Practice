import React, { useContext, useState } from "react";
import { Data3 } from "./Provider2";

const Consumer3 = () => {
  const Studentdata = useContext(Data3);
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const handleData3 = () => {
    setData(Studentdata);
    setShow(true);
  };
  const Hide = () => {
    setShow(false);
  };
  return (
    <div>
      {show ? <h1>{data[0].title}</h1> : null}
      {show ? (
        <button onClick={Hide}>Hide Consumer 3</button>
      ) : (
        <button onClick={handleData3}>See Consumer 3</button>
      )}
    </div>
  );
};

export default Consumer3;
