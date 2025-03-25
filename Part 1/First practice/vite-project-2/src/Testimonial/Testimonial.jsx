import React, { useState } from "react";
import "../style.css";
import quotes from "./Qutes";

const Testimonial = () => {
  const quote_info = quotes;
  const [position, setPosition] = useState(0);

  const handlePrev = () => {
    setPosition(position - 1);
  };

  const handleNext = () => {
    setPosition(position + 1);
  };

  return (
    <div className="container">
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h3>{quote_info[position].quote}</h3>
        <h2>-{quote_info[position].author}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <button onClick={handlePrev} disabled={position === 0}>
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={position === quote_info.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
