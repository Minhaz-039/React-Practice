import React, { useState } from "react";
import "../style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const handle_Input = (value) => {
    setInputValue(
      (prev) => prev + (value === "×" ? "*" : value === "÷" ? "/" : value)
    );
  };

  return (
    <form
      className="container"
      name="calc"
      style={{ width: "100%", padding: "10%" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div
        style={{
          width: "100%",
          padding: "10%",
          marginBottom: "10px",
          border: "2px solid white",
          borderRadius: "10px",
          backgroundColor: "black",
          color: "white",
        }}
      >
        {inputValue}
      </div>
      <div
        className="calculator-keys"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <button onClick={() => handle_Input("7")}>7</button>
        <button onClick={() => handle_Input("8")}>8</button>
        <button onClick={() => handle_Input("9")}>9</button>
        <button onClick={() => handle_Input("÷")}>÷</button>
        <button onClick={() => handle_Input("4")}>4</button>
        <button onClick={() => handle_Input("5")}>5</button>
        <button onClick={() => handle_Input("6")}>6</button>
        <button onClick={() => handle_Input("×")}>×</button>
        <button onClick={() => handle_Input("1")}>1</button>
        <button onClick={() => handle_Input("2")}>2</button>
        <button onClick={() => handle_Input("3")}>3</button>
        <button onClick={() => handle_Input("-")}>-</button>
        <button onClick={() => handle_Input("0")}>0</button>
        <button onClick={() => handle_Input(".")}>.</button>
        {/* Equals button */}
        <button
          className="equal-sign"
          onClick={() => setInputValue(eval(inputValue).toString())}
        >
          =
        </button>
        <button onClick={() => handle_Input("+")}>+</button>

        {/* Clear button */}
        <button
          className="all-clear"
          style={{ backgroundColor: "orange" }}
          onClick={() => setInputValue("")}
        >
          AC
        </button>
      </div>
    </form>
  );
};

export default Calculator;
