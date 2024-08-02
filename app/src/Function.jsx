import { useState } from "react";

function FunctionComponent() {
  const [count, setCount] = useState(100);
  const [count1, setCount1] = useState(10);

  function increment() {
    setCount(count + 10);
    setCount1(count1 + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Function Component</h1>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default FunctionComponent;
