import React from "react";
import First from "./First";

const App = () => {
  let msg = "Good Afternoon";
  return (
    <div>
      <h1>React App</h1>
      <First>
        {"Hello Jspider"} <br />
        {"Welcome to the React Class"}
      </First>
    </div>
  );
};

export default App;
