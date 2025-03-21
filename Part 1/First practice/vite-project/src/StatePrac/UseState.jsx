import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const UseState = () => {
  const [count, setcount] = useState(0);
  const [friends, setFriends] = useState(["Rahul", "Raj", "Ravi", "Rohan"]);
  const [movies, setMovies] = useState({
    movie: "Avengers",
    rating: 5,
  });
  const [student, setStudent] = useState([
    {
      name: "Rahul",
      age: 20,
      class: "12th",
      rollno: 12,
    },
    {
      name: "Raj",
      age: 21,
      class: "12th",
      rollno: 13,
    },
    {
      name: "Ravi",
      age: 22,
      class: "12th",
      rollno: 14,
    },
    {
      name: "Rohan",
      age: 23,
      class: "12th",
      rollno: 15,
    },
  ]);
  const [age, setAge] = useState("");
  const [roll, setRoll] = useState("");

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleDecrement = () => {
    setcount(count - 1);
  };

  const [Name, setName] = useState("");

  const handleStudent = () => {
    setStudent(
      student.map((S) => (S.rollno === roll ? { ...S, age: age } : S))
    );
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>
        <CiCirclePlus />
      </button>
      <button onClick={handleDecrement}>
        <CiCircleMinus />
      </button>

      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map((friend) => (
            <li key={friend}>{friend}</li>
          ))}
        </ul>
        <input
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            if (Name.trim() !== "") {
              setFriends([...friends, Name]);
              setName(""); // Clear input after adding
            }
          }}
        >
          Add Friend
        </button>
      </div>

      <div>
        <h1>Movies</h1>
        <h2>{movies.movie}</h2>
        <h2>{movies.rating}</h2>
        <button
          onClick={() =>
            setMovies({
              ...movies,
              rating: movies.rating + 1,
              movie: "Iron man",
            })
          }
        >
          Increase Rating
        </button>
      </div>

      <h1>THis is the Student Information</h1>

      <div>
        {student.map((M) => (
          <>
            <ul key={M.rollno}>
              <li>Name : {M.name}</li>
              <li>Age : {M.age}</li>
              <li>Class : {M.class}</li>
              <li>Roll : {M.rollno}</li>
            </ul>
          </>
        ))}
      </div>

      <input
        type="text"
        value={roll}
        placeholder="Type which roll you want to edit"
        onChange={(e) => setRoll(parseInt(e.target.value))}
      />
      <input
        type="text"
        value={age}
        placeholder="Type what should be the age of this roll "
        onChange={(e) => setAge(parseInt(e.target.value))}
      />

      <button onClick={handleStudent}>Change the Student information</button>
    </div>
  );
};

export default UseState;
