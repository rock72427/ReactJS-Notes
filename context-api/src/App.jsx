import React from "react";
import { CountContextWrapper } from "./context/CountContext";
import { ColorContextWrapper } from "./context/ColorContext";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
  return (
    <>
      <ColorContextWrapper>
        <CountContextWrapper>
          <Child1 />
          <Child2 />
        </CountContextWrapper>
      </ColorContextWrapper>
    </>
  );
};

export default App;
