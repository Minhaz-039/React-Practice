import React, { useEffect, useRef, useState } from "react";

const TImer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (start) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start]);

  return (
    <div
      style={{
        textAlign: "center",
        border: "2px solid black",
        borderRadius: "2px",
        padding: "10px",
      }}
    >
      <h1>Timer : {time}</h1>
      <button
        onClick={() => {
          setStart(true);
        }}
      >
        Start
      </button>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default TImer;
