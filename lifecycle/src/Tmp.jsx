import React, { useState } from "react";

const Tmp = () => {
  const [tmp, setTmp] = useState(true);
  return <div>{tmp && <h1>Hello World</h1>}</div>;
};

export default Tmp;
