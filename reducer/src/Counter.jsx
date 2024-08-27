import React, { useReducer, useState } from "react";
import countReducer from "./reducers/CountReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, 0);
  const [value, setValue] = useState("");

  const buttonSubmit = () => {
    dispatch({ type: "custom", payload: value });
    setValue("");
  };

  return (
    <>
      <h1>useReducer hook</h1>
      <h1>{state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "inc1" })}>+1</button>
        <button onClick={() => dispatch({ type: "dec1" })}>-1</button>
        <button onClick={() => dispatch({ type: "inc5" })}>+5</button>
        <button onClick={() => dispatch({ type: "dec5" })}>-5</button>
        <button onClick={() => dispatch({ type: "inc10" })}>+10</button>
        <button onClick={() => dispatch({ type: "dec10" })}>-10</button>
      </div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="number"
        />
        <button onClick={buttonSubmit}>Change the count</button>
      </div>
    </>
  );
};

export default Counter;
