import React from "react";

function Child({ name, getAddress }) {
  let address = "UP";
  function handleClick() {
    getAddress(address);
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Send Data</button>
      <b>{name}</b>
    </div>
  );
}

export default Child;
