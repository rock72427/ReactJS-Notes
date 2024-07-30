import React from "react";
import Third from "./Third";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <Third name="Rocky" age={25} msg={msg} />
    </div>
  );
};

export default App;
