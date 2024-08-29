import React from "react";
import { useSelector } from "react-redux";

const Child2 = () => {
  const count = useSelector((store) => store.countReducer);

  return (
    <>
      <h1>Child2 Component</h1>
      <h1>count = {count}</h1>
    </>
  );
};

export default Child2;
