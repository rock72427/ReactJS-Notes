import React, { useMemo, useState } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  function handleColor() {
    setColor(
      `rgb(${Math.trunc(Math.random() * 255)}, ${Math.trunc(
        Math.random() * 255
      )}, ${Math.trunc(Math.random() * 255)})`
    );
  }
  let getNumber = useMemo(() => {
    console.log("hi");
    for (let i = 0; i <= 1000000000; i++) {}
    return count * 100;
  }, [count]);
  return (
    <>
      <h1>useMemo()hook</h1>
      <div
        style={{
          height: "200px",
          width: "500px",
          alignContent: "center",
          textAlign: "center",
          backgroundColor: color,
        }}
      >
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>ChangeCount</button>
        <button onClick={handleColor}>ChangeColor</button>
      </div>
      <h1>{getNumber}</h1>
    </>
  );
};

export default Memo;
