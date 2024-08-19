import React, { useState } from "react";
import ClassLifeCycle from "./ClassLifeCycle";
import UseEffect from "./UseEffect";

const App = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setFlag(!flag)}>
        {flag ? "Remove Component" : "Add Component"}
      </button>
      {flag && <ClassLifeCycle color="green" />} */}
      <UseEffect />
    </div>
  );
};

export default App;
