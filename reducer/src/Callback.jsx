import React, { useCallback, useEffect, useState } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  function handleColor() {
    setColor(
      `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(
        Math.random() * 255
      )}, ${Math.trunc(Math.random() * 255)})`
    );
  }
  const printMsg = useCallback(() => {
    return color;
  }, [color]);
  return (
    <>
      <h1>useCallback() hook</h1>
      <div
        style={{
          height: "200px",
          width: "500px",
          alignContent: "center",
          textAlign: "center",
          background: color,
        }}
      >
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>ChangeCount</button>
        <button onClick={handleColor}>ChangeColor</button>
      </div>
      <ShowColor printMsg={printMsg} />
    </>
  );
};

function ShowColor({ printMsg }) {
  useEffect(() => {
    console.log("Function is changed");
  }, [printMsg]);
  return (
    <>
      <h1>Child Component</h1>
      <h2>{printMsg()}</h2>
    </>
  );
}

export default Callback;
