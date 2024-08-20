import React, { useState } from "react";
import ClassLifeCycle from "./ClassLifeCycle";
import UseEffect from "./UseEffect";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

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
      <Example3 />
    </div>
  );
};

export default App;
