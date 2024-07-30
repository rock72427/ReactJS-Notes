import React from "react";

const First = ({ name, address, age }) => {
  return (
    <div>
      <h1>This is Function Component</h1>
      <h1>Name = {name}</h1>
      <h1>Address = {address}</h1>
      <h1>Age = {age}</h1>
    </div>
  );
};

export default First;
