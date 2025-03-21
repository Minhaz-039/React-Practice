import React from "react";

const List = () => {
  let Number = [1, 2, 3, 4, 5];

  let UserInformation = [
    {
      name: "Minhazul Hasnain Reza",
      age: 24,
      profession: "Software Engineer",
    },
    {
      name: "John Doe",
      age: 30,
      profession: "Doctor",
    },
    {
      name: "Jane Doe",
      age: 25,
      profession: "Nurse",
    },
  ];

  return (
    <div>
      {Number.map((num) => (
        <ul key={num}>
          <li>{num}</li>
        </ul>
      ))}

      {UserInformation.map((user) => (
        <ul key={user.name}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.profession}</li>
        </ul>
      ))}
    </div>
  );
};

export default List;
