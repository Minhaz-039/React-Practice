import React from "react";

const OnClick_MouceMove_Copy = () => {
  const OnClick = () => {
    console.log("Button Clicked");
  };

  const On_Mouse_Move = () => {
    console.log("Mouse Moved");
  };

  const On_Copy = () => {
    console.log("Text Copied");
  };

  return (
    <div>
      <button onClick={OnClick}>Onclick</button>
      <button onMouseMove={On_Mouse_Move}>OnMouseMove</button>
      <h1 onCopy={On_Copy}>OnCopy</h1>
    </div>
  );
};

export default OnClick_MouceMove_Copy;
