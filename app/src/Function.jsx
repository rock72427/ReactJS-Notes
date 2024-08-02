import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Function Component</h1>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default FunctionComponent;
