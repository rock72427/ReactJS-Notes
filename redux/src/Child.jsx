import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Child = () => {
  // to consume the redux state
  const count = useSelector((store) => store.countReducer);
  console.log(count);
  // storing the useDispatch hook
  const dispatch = useDispatch();
  function incrementHandler() {
    dispatch({ type: "inc" });
  }

  return (
    <>
      <h1>Child Component</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "dec" })}>DEC</button>
      <button onClick={incrementHandler}>INC</button>
    </>
  );
};

export default Child;
