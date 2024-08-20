import React, { useEffect, useState } from "react";

const Example1 = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>Performing Async Operations in react</h1>
      <h2>All data of 10 users</h2>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <li>{e.name}</li>
          </div>
        );
      })}
    </>
  );
};

export default Example1;
