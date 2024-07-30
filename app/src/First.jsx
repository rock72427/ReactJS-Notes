import React from "react";

const First = ({ children }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>{children}</h1>
    </div>
  );
};

export default First;
