import React from "react";

const Information = ({ CardInformation }) => {
  return (
    <div>
      {CardInformation.map((card) => (
        <ul key={card.name}>
          <li>{card.name}</li>
          <li>{card.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default Information;
