import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleBlur = () => {
    if (searchValue.trim() === "") {
      setShow(true); // Close only if no input is provided
    }
  };

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: "lightblue",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {show ? (
        <FaSearch />
      ) : (
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onBlur={handleBlur} // Close input when it loses focus
          autoFocus
        />
      )}
    </div>
  );
};

export default HiddenSearchBar;
