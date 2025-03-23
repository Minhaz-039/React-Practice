import React, { useReducer, useState } from "react";

let initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.Add.added;
    case "minus":
      return state - action.Minus.minus;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const MoneyReducer = () => {
  const [added, setAdded] = useState(0);
  const [minus, setMinus] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        textAlign: "center",
        border: "2px solid black",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h1>Money : {state}</h1>
      <input
        type="text"
        placeholder="Enter amount to add"
        value={added}
        onChange={(e) => setAdded(parseInt(e.target.value))}
      />
      <button
        style={{ padding: "5px", border: "2px solid black" }}
        onClick={() => dispatch({ type: "add", Add: { added } })}
      >
        Add
      </button>
      <input
        type="text"
        placeholder="Enter amount to minus"
        value={minus}
        onChange={(e) => setMinus(parseInt(e.target.value))}
      />
      <button
        style={{ padding: "5px", border: "2px solid black" }}
        onClick={() => dispatch({ type: "minus", Minus: { minus } })}
      >
        Minus
      </button>
      <button
        style={{ padding: "5px", border: "2px solid black" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default MoneyReducer;
