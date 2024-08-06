import React, { useState } from "react";

const Child = () => {
  const [flag, setFlag] = useState(true);
  const [number, setNumber] = useState(24);
  return (
    <>
      <h1>This is child component</h1>
      {flag ? (
        <h1>All the best for olympic gold in hockey</h1>
      ) : (
        <h1>Better luck for next time</h1>
      )}
      {number % 2 == 0 && <h1>{number} is an even number</h1>}
      {/* {number % 2 == 0 || <h1>{number} is an odd number</h1>} */}
    </>
  );
};

export default Child;
