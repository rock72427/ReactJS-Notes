import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((ele) => {
        return (
          <div key={ele.id}>
            <li>{ele.title}</li>
          </div>
        );
      })}
    </div>
  );
};

export default App;
