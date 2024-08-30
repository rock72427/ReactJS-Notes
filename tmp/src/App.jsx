import React from "react";
import { Provider } from "react-redux";
import store from "./redux/Store";
import BookContainer from "./redux/BookContainer";

const App = () => {
  return (
    <Provider store={store}>
      <BookContainer />
    </Provider>
  );
};

export default App;
