import React, { useState } from "react";
import ClassLifeCycle from "./ClassLifeCycle";
import UseEffect from "./UseEffect";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";
import Example6 from "./Example6";
import Todo from "./Todo";
import InputGenerator from "./InputGenerator";
import Axios from "./Axios";
import "./App.css";
import Tmp from "./Tmp";

const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setFlag(!flag)}>
        {flag ? "Remove Component" : "Add Component"}
      </button>
      {flag && <ClassLifeCycle color="green" />} */}
      {/* <UseEffect /> */}
      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Example5 /> */}
      {/* <Example6 /> */}
      {/* <Todo /> */}
      {/* <InputGenerator /> */}
      {/* <Axios /> */}
      <Tmp />
    </div>
  );
};

export default App;
