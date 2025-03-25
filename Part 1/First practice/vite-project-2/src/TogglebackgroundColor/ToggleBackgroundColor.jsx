import React, { useState } from "react";

const ToggleBackgroundColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(buttonStyle === "white" ? "#1b1b1b" : "white");
  };

  return (
    <div
      style={{
        backgroundColor,
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: textColor }}>Toggle Background Color</h1>
      <button
        onClick={handleClick}
        style={{
          buttonStyle,
          backgroundColor,
          color: textColor,
          border: `2px solid ${textColor}`,
        }}
      >
        CLick to change theme
      </button>
    </div>
  );
};

export default ToggleBackgroundColor;
