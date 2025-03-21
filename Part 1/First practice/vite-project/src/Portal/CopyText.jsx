import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyText = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
    /**navigator.clipboard → Accesses the Clipboard API.
    .writeText(inputValue) → Writes (copies) inputValue to the clipboard. */
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 6000);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>
      <PopupContent copied={copied}></PopupContent>
    </div>
  );
};

export default CopyText;
