import React from "react";

const ConditionalRendering = ({ isValid }) => {
  const ValidContent = () => {
    return <h1>Valid Content</h1>;
  };

  const InvalidContent = () => {
    return <h1>Invalid Content</h1>;
  };

  return <div>{isValid ? <ValidContent /> : <InvalidContent />}</div>;
};

export default ConditionalRendering;
