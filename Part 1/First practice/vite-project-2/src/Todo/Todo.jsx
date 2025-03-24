import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodo((todo) => [
      ...todo,
      {
        task: input,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInput("");
  };

  const handleReset = () => {
    setTodo([]);
  };

  const handleRemove = (id) => {
    setTodo((todo) => todo.filter((item) => item.id !== id));
  };

  return (
    <div
      style={{
        border: "2px solid white ",
        borderRadius: "10px",
        color: "white",
        padding: "10px",
        justifyContent: "center",
      }}
    >
      <div>
        {todo.map((item) => (
          <div key={item.id}>
            <li>
              {item.task}{" "}
              <button
                style={{
                  background: "none",
                  border: "none",
                  padding: "0px",
                }}
                onClick={() => handleRemove(item.id)}
              >
                <CiCircleRemove />
              </button>
            </li>
          </div>
        ))}
      </div>
      <input
        style={{
          border: "2px solid white",
          borderRadius: "5px",
          padding: "5px",
        }}
        type="text"
        value={input}
        placeholder="Enter your task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginRight: "5px" }} onClick={handleSubmit}>
        Add task
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Todo;
