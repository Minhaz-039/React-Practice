import React from "react";

const Temparature = ({ temp }) => {
  const Show = (T) => {
    if (T < 10) {
      return <h1>It's cold Temperature </h1>;
    } else if (T >= 10 && T < 30) {
      return <h1>It's nice Temperature</h1>;
    } else {
      return <h1>It's warm Temperature</h1>;
    }
  };

  return (
    <div>
      {Show(temp)}
      {temp < 10 ? <h1> It is winter </h1> : <h1> It is summer </h1>}
    </div>
  );
};

export default Temparature;
