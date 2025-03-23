import React, { useId } from "react";

const UniqueID = () => {
  const id = useId();
  return (
    <div>
      <label
        style={{
          padding: "5px",
          border: "2px solid black",
          borderRadius: "2px",
          margin: "5px",
        }}
        htmlFor={`${id}-Name`}
      >
        Name
      </label>
      <label
        style={{
          padding: "5px",
          border: "2px solid black",
          borderRadius: "2px",
          margin: "5px",
        }}
        htmlFor={`${id}-Email`}
      >
        EMail
      </label>
    </div>
  );
};

export default UniqueID;
