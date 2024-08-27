import React, { useRef } from "react";

const Tmp = () => {
  const refElement = useRef();
  console.log(refElement);
  const handleClick = () => {
    refElement.current.style.color = "red";
    refElement.current.innerHTML = "Hello Wolrd";
  };
  return (
    <div>
      <input ref={refElement} type="text" />
      <button onClick={handleClick}>Click</button>
      <p ref={refElement}></p>
    </div>
  );
};

export default Tmp;
