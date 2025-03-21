import React from "react";
import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <div>
      {copied && (
        <div
          style={{
            padding: "10px",
            border: "2px solid black",
            borderRadius: "10px",
            bottom: "3rem",
          }}
        >
          Copied to the Clipboard!
        </div>
      )}
    </div>,
    document.querySelector("#pop-up")
  );
};

export default PopupContent;
