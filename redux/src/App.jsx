import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Child from "./Child";
import Child2 from "./Child2";

function App() {
  return (
    <Provider store={store}>
      {/* // all components */}
      <Child />
      <Child2 />
    </Provider>
  );
}

export default App;
