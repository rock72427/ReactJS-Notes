import React, { useEffect, useState } from "react";

const Example4 = () => {
  const [count, setCount] = useState(0);
  const [bgcolor, setBgColor] = useState("white");
  useEffect(() => {
    if (count > 0 && count % 2 == 0) {
      setBgColor("green");
    } else if (count > 0 && count % 2 != 0) {
      setBgColor("red");
    } else if (count < 0) {
      setBgColor("blue");
    } else {
      setBgColor("white");
    }
    console.log("hi");
  }, [count]);
  return (
    <>
      <h1>Using Dependencies in useEffect</h1>
      <div
        style={{
          height: "200px",
          textAlign: "center",
          border: "1px solid black",
          width: "500px",
          margin: "auto",
          background: bgcolor,
          alignContent: "center",
        }}
      >
        <button onClick={() => setCount(count + 1)} className="btn btn-dark">
          +
        </button>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)} className="btn btn-dark">
          -
        </button>
      </div>
    </>
  );
};

export default Example4;
