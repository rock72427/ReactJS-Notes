import { createContext, useContext, useState } from "react";

const countContext = createContext();

// provider component
export const CountContextWrapper = (props) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {props.children}
    </countContext.Provider>
  );
};

// consume(custom hook)
export const useCount = () => {
  return useContext(countContext);
};
