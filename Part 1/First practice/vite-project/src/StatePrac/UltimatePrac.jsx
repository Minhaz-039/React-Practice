import React, { useState } from "react";

const UltimatePrac = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [Name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [shopping, setShopping] = useState([]);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [profile, setProfile] = useState({
    name: "Rahul",
    age: 20,
    class: "12th",
    rollno: 12,
  });
  const handleCountIn = () => {
    setCount(count + 1);
  };
  const handleCountDe = () => {
    setCount(count - 1);
  };
  const AddTask = () => {
    setTodos([...todos, task]);
    setTask("");
  };
  const updateProfile = () => {
    setProfile({ ...profile, name: Name, rollno: roll });
  };
  const handleItems = () => {
    setShopping([...shopping, { item: item, quantity: quantity }]);
    setItem("");
    setQuantity("");
  };

  return (
    <div>
      <hr />

      <h1>Counting : {count}</h1>
      <button onClick={handleCountIn}>Increment</button>
      <button onClick={handleCountDe}>Decrement</button>

      <hr />

      <h1>Todo List</h1>
      {todos.map((todo) => (
        <>
          <ul key={todo}>
            <li>{todo}</li>
          </ul>
        </>
      ))}
      <input
        type="text"
        value={task}
        placeholder="Enter tasks"
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={AddTask}>Add Task</button>

      <hr />
      <h1>Profile</h1>
      <div>
        <h3>Name: {profile.name}</h3>
        <h3>Age: {profile.age}</h3>
        <h3>Class: {profile.class}</h3>
        <h3>Roll No: {profile.rollno}</h3>
      </div>

      <h1>Update Profile</h1>
      <input
        type="text"
        value={Name}
        placeholder="Change the Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={roll}
        placeholder="Edit the roll"
        onChange={(e) => setRoll(parseInt(e.target.value))}
      />
      <button onClick={updateProfile}>Update</button>

      <hr />

      <h1>Shopping List</h1>
      {shopping.map((item) => (
        <>
          <ul key={item.item}>
            <li>
              {item.item} - {item.quantity}
            </li>
          </ul>
        </>
      ))}

      <input
        type="text"
        value={item}
        placeholder="Enter Item"
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="text"
        value={quantity}
        placeholder="Enter quantity"
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleItems}>Add Items</button>
    </div>
  );
};

export default UltimatePrac;
