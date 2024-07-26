import React from "react";

const First = () => {
  function buttonClick() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <h1>EVENTS</h1>
      <button onClick={buttonClick}>Click Here</button>
    </div>
  );
};

export default First;
