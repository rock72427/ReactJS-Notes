import React, { useContext } from "react";
import { CounterContext } from "../context/Counter";

const Counter = () => {
  const CounterState = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => CounterState.setCount(CounterState.count - 1)}>
        Decrement
      </button>
      <button onClick={() => CounterState.setCount(CounterState.count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
