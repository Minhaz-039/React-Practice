import React from "react";

const MainComponent = () => {
  const Name = "Minhazul Hasnain Reza";

  const multiply = (a, b) => a * b;

  const specialClass = "anything-I-want";

  const date = new Date();

  const product = {
    name: "Laptop",
    price: 50000,
    brand: "HP",
  };

  return (
    <div>
      <p>Curly braces Use . 2 + 2 = {2 + 2}</p>
      <h1>My name is {Name}</h1>
      <h2>{multiply(10, 20)}</h2>
      <h3 className={specialClass}></h3>
      <h4>
        {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
      </h4>
      <p>
        {product.name} - {product.price} - {product.brand}
      </p>
    </div>
  );
};

export default MainComponent;
