import React from "react";
import { CountContextWrapper } from "./context/CountContext";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";

const App = () => {
  return (
    <>
      <CountContextWrapper>
        <Child1 />
        <Child2 />
      </CountContextWrapper>
    </>
  );
};

export default App;
