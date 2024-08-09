import React from "react";
import { useCount } from "../context/CountContext";
import { useColor } from "../context/ColorContext";

const Child4 = () => {
  const { count, setCount } = useCount();
  const { color, setColor } = useColor();
  console.log(color, setColor);
  return (
    <div style={{ background: color }}>
      <h1>Child4</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button
        onClick={() =>
          setColor((pre) => {
            if (pre === "green") {
              return "red";
            } else {
              return "green";
            }
          })
        }
      >
        Change color
      </button>
    </div>
  );
};

export default Child4;
