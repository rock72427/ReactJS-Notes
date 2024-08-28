import React from "react";
import NewComponent from "./Child";
import NewComponent2 from "./Child2";

const App = () => {
  return (
    <div>
      <NewComponent name={"Virat"} />
      <NewComponent name={"Rohit"} />
      <NewComponent2 age={20} />
      <NewComponent2 age={18} />
    </div>
  );
};

export default App;
