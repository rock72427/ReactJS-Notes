import React from "react";

const Child = () => {
  let fruits = ["mango", "grapes", "apple", "banana", "orange"];
  let displayFruits = [];
  for (let fruit of fruits) {
    displayFruits.push(<li>{fruit}</li>);
  }
  return (
    <div>
      <ol>
        {fruits.map((fruit, index) => {
          return <li>{fruit}</li>;
        })}
      </ol>
      {displayFruits}
    </div>
  );
};

export default Child;
