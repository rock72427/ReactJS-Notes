import React from "react";
import Third from "./Third";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <Third name={"Rocky"} age={25} msg={msg} />

      <First name={"Virat"} address={"Delhi"} age={35} />
    </div>
  );
};

export default App;
