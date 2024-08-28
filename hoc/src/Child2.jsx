import React from "react";
import HOC from "./HOC";

const Child2 = (props) => {
  return (
    <>
      <h2>{props.age}</h2>
      <h1>
        {props.isEligible ? "Eligible for vote" : "not eligible for vote"}
      </h1>
    </>
  );
};

const NewComponent2 = HOC(Child2);
console.log("2" + NewComponent2);

export default NewComponent2;
