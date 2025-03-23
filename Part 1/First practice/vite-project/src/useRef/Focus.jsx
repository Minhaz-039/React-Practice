import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Click to focus the input box
      </button>
    </div>
  );
};

export default Focus;
