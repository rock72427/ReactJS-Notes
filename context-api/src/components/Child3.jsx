import React from "react";
import { useCount } from "../context/CountContext";

const Child3 = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>Child3</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Child3;
