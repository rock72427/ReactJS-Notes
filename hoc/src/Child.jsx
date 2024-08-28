import React from "react";
import HOC from "./HOC";

const Child = (props) => {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Address: {props.address}</h2>
      <h3>{props.count}</h3>
      <hr />
    </>
  );
};

const NewComponent = HOC(Child);
console.log("1" + NewComponent);

export default NewComponent;
