import React from "react";
import { useCount } from "../context/CountContext";

const Child4 = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <h1>Child4</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Child4;
