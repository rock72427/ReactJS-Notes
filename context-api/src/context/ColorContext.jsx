import { createContext, useContext, useState } from "react";

const colorContext = createContext();

export const ColorContextWrapper = (props) => {
  const [color, setColor] = useState("green");
  return (
    <colorContext.Provider value={{ color, setColor }}>
      {props.children}
    </colorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(colorContext);
};
